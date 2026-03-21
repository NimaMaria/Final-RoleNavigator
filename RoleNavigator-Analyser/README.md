# RoleNavigator – AI Resume Analyser

## 📌 Overview

**RoleNavigator** is an AI-powered resume analysis platform that evaluates resumes against a job description and delivers structured, actionable insights to improve hiring outcomes.

The system combines rule-based resume evaluation, ATS compatibility checks, and **Groq LLM API–driven job alignment analysis** to provide intelligent, role-specific recommendations.

---

## ✨ Key Features

### 📄 Resume Analysis
- Upload and analyze **PDF resumes**
- Automated text extraction using `pdfplumber`
- Section-wise evaluation and checks ATS compatability:
  - Contact Information
  - Professional Summary
  - Work Experience
  - Education
  - Skills
- Overall resume score (0–100)

---

### 💪 Strength Detection
The platform automatically identifies strong elements such as:
- ✔ Professional formatting
- ✔ Complete contact information
- ✔ Clear section headings
- ✔ Well-structured experience section
- ✔ ATS-friendly layout
- ✔ Strong keyword alignment

---

### 🤖 AI Job-Specific Recommendations

Using **Groq LLM API**, the system compares:

> Resume Content + Job Description

Each recommendation includes:
- **Current Status** – What is missing or weak
- **Why It’s Needed** – Based on job description
- **Action Steps** – Concrete improvement suggestions
- **Where to Add It** – Suggested resume section
- **Impact** – Expected improvement in hiring probability

Recommendations are categorized into:

#### 🔴 High Priority (Critical Gaps)
- Major missing requirements for the target role.
- In demand skills to achieve the target role.
- Suggest the projects to work on for the required job description.

---

#### 🟡 Medium Priority (Optimization)
- Improve measurable achievements
- Strengthen project descriptions
- Add job-relevant keywords
- Enhance summary alignment

---

#### 🟢 Low Priority (Enhancements)
- Minor formatting refinements
- Optional certifications
- Soft skill improvements

---

### 🧠 Skills to Develop for This Role

A dedicated AI-generated section highlights:
- Missing technical skills
- Required tools & frameworks
- Domain-specific technologies
- Important soft skills

This acts as a **career improvement roadmap**.

---

### 📊 Content Analysis Dashboard

Section-wise scoring is provided for:
- Contact Information
- Summary
- Experience
- Education
- Skills

Each section is evaluated for completeness, structure, and clarity.

---

### 🏢 ATS Compatibility Evaluation

The platform validates resumes against common ATS standards:

-  Standard fonts detected
-  Clear section headings
-  Contact information present
-  No complex formatting
-  Keyword coverage analysis and improvement suggestions

---

### 📄 PDF Report Generation

Users can generate and download a structured PDF report containing all the analaysis data.

---

### 🔗 Share Results

The **Share Results** feature allows users to share their resume analysis via: Email,WhatsApp and other supported platforms.

This enables collaboration with mentors, peers, or career advisors.

---

## 🔄 Workflow

1. Upload resume (PDF)
2. Enter job description
3. Resume parsing and rule-based scoring
4. AI-powered job alignment analysis
5. ATS compatibility validation
6. View dashboard results
7. Download or share report

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| **Backend** | Python, Flask |
| **Frontend** | HTML, CSS, JavaScript, Vite |
| **PDF Parsing** | pdfplumber |
| **AI Integration** | Groq LLM API |

---

## 🎯 Use Cases

- Resume optimization for job applications  
- ATS readiness evaluation  
- Role-specific resume tailoring  
- Career guidance and skill gap analysis  

---

## 📌 Project Context

RoleNavigator – Resume Analyzer is a core module within the broader **RoleNavigator platform**, focused on intelligent career alignment and application optimization tools.
