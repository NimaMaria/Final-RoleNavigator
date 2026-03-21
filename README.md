# RoleNavigator Ecosystem

Welcome to the RoleNavigator project! This comprehensive platform features multiple tools for job seekers, including a Landing Page, Resume Analyzer, Interview Question Generator, and a Resume Builder.

## Tech Stack & Project Modules

The project is structured into multiple decoupled microservices serving different features.

### 1. Landing Page (`HomePage`)
Serves as the main entry point to the platform.
* **Frontend**: Vanilla HTML, CSS, and JavaScript.
* **Backend**: Node.js, Express.js.
* **Database & Tools**: MongoDB (Mongoose), dotenv for environment variables, CORS.

### 2. Resume Analyzer (`RoleNavigator-Analyser`)
A sophisticated tool to analyze resumes.
* **Frontend**: React.js (TypeScript), Vite, TailwindCSS, Radix UI Components, Framer Motion for animations.
* **Backend**: Node.js, Express.js.
* **Database & ORM**: Neon Serverless Postgres, Drizzle ORM.
* **AI & External APIs**: Groq SDK, OpenAI SDK.
* **Tools**: Passport.js for authentication, Multer for file handling, Zod for validation.

### 3. Interview Question Generator (`InterviewQuestionGenerator/Interview-question-new`)
An AI-powered service to generate relevant interview questions based on resumes.
* **Frontend**: React.js, Vite.
* **Backend**: Python, Flask, Flask-CORS.
* **AI & Processing**: Python-dotenv, Groq API, FAISS (vector search), Sentence-Transformers, PyPDF2.

### 4. Resume Builder (`resume-builder`)
A tool to easily build and export professional resumes.
* **Frontend**: React.js, Vite.
* **Backend**: Python, Flask, Flask-CORS.
* **PDF & Processing**: WeasyPrint, pdfplumber, Jinja2 templating, Groq API.

---

## Setup Instructions (For New Contributors)

Follow these steps to set up the project locally on your machine.

### 1. Clone the Repository
```bash
git clone <repository-url>
cd NewFinal-RN
```

### 2. Install Node.js Dependencies
You will need to install npm packages for the Node.js/React based modules. Run the following commands:
```bash
# Landing Page Backend
cd HomePage/backend
npm install
cd ../..

# Resume Analyzer
cd RoleNavigator-Analyser
npm install
cd ..

# Interview Question Generator Frontend
cd InterviewQuestionGenerator/Interview-question-new/frontend
npm install
cd ../../..

# Resume Builder Frontend
cd resume-builder/frontend
npm install
cd ../..
```

### 3. Setup Python Virtual Environments
The project contains two Python Flask backends that require virtual environments to isolate dependencies.

#### For the Interview Question Generator Backend:
```bash
cd InterviewQuestionGenerator/Interview-question-new/backend

# Create virtual environment
python -m venv venv

# Activate virtual environment (Windows)
venv\Scripts\activate
# Activate virtual environment (macOS/Linux)
# source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Deactivate when done
deactivate
cd ../../..
```

#### For the Resume Builder Backend:
```bash
cd resume-builder/backend

# Create virtual environment
python -m venv venv

# Activate virtual environment (Windows)
venv\Scripts\activate
# Activate virtual environment (macOS/Linux)
# source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Deactivate when done
deactivate
cd ../..
```

### 4. Setup Environment Variables
Each backend service needs its own `.env` file for configuration and API keys.

* **`HomePage/backend/.env`**:
  Requires `MONGO_URI` (your MongoDB connection string) and `PORT=5000`.
* **`RoleNavigator-Analyser/.env`**:
  Requires `DATABASE_URL` (Neon Postgres DB string), `GROQ_API_KEY`, and `OPENAI_API_KEY`.
* **`InterviewQuestionGenerator/Interview-question-new/backend/.env`**:
  Requires `GROQ_API_KEY`.
* **`resume-builder/backend/.env`**:
  Requires `GROQ_API_KEY`.

---

## How to Run the Project

You can start the entire ecosystem at once using the root orchestrator script, or run sections individually depending on what you are testing.

### Run the Entire Project (Recommended)
From the root directory (`NewFinal-RN`), execute the global start script using Node.js. This will spin up all 6 services concurrently on different ports:
```bash
node start-all.js
```

### Project Run Ports Mapping:
Once started, the services will be running on the following localhost ports:
* **`http://localhost:5000`** - Landing Page (Node Backend & Static Files)
* **`http://localhost:5001`** - Resume Analyzer (Vite React App)
* **`http://localhost:5002`** - Interview Frontend (Vite React App)
* **`http://localhost:5003`** - Interview Backend (Flask API)
* **`http://localhost:5004`** - Resume Builder Frontend (Vite React App)
* **`http://localhost:5005`** - Resume Builder Backend (Flask API)

### Run Modules Individually
If you prefer to run services individually for debugging:

**Node.js / React Apps**:
```bash
# Landing Page Backend
cd HomePage/backend && node server.js

# Resume Analyzer
cd RoleNavigator-Analyser && npm run dev

# Interview Frontend
cd InterviewQuestionGenerator/Interview-question-new/frontend && npm run dev

# Resume Builder Frontend
cd resume-builder/frontend && npm run dev
```

**Python Flask Apps** (Ensure the respective `venv` is activated first):
```bash
# Interview Backend
cd InterviewQuestionGenerator/Interview-question-new/backend
python app.py

# Resume Builder Backend
cd resume-builder/backend
python app.py
```
