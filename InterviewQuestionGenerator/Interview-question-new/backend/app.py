import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from resume_parser import extract_text_from_pdf
from question_generator import generate_interview_questions

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"), override=True)
key_raw = os.getenv("GROQ_API_KEY")
print("RAW repr:", repr(key_raw))
if key_raw:
    print("First 10 chars + codes:", [(c, ord(c)) for c in key_raw[:10]])
    key = key_raw.strip()
    print("STRIPPED len:", len(key), "starts:", repr(key[:4]), "ends:", repr(key[-4:]))
else:
    print("Key is None")

app = Flask(__name__)
# Allow any origin for local dev
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.errorhandler(400)
def bad_request(e):
    return jsonify({"error": "Bad request", "detail": str(e)}), 400

@app.errorhandler(500)
def internal_error(e):
    return jsonify({"error": "Internal server error", "detail": str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({ "status": "ok", "message": "Backend is running" })

@app.route('/api/upload-resume', methods=['POST'])
def upload_resume():
    if 'resume' not in request.files:
        return jsonify({"error": "No resume file uploaded"}), 400
    
    file = request.files['resume']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    if file and file.filename.endswith('.pdf'):
        text = extract_text_from_pdf(file)
        if text:
            return jsonify({
                "message": "Resume uploaded successfully",
                "text": text
            })
        else:
            return jsonify({"error": "Failed to extract text from PDF"}), 500
            
    return jsonify({"error": "Only PDF files are allowed"}), 400

@app.route('/api/generate-questions', methods=['POST'])
def generate_questions():
    data = request.get_json(silent=True) or {}
    resume_text = data.get('resume_text')
    
    if not resume_text:
        return jsonify({"error": "No resume text provided. Make sure Content-Type is application/json."}), 400
    
    try:
        questions = generate_interview_questions(resume_text)
        if isinstance(questions, dict) and 'error' in questions:
            return jsonify(questions), 500
        return jsonify(questions)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5003, use_reloader=False)
