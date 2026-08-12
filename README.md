# AI Resume Checker

An AI-powered resume analysis platform built using the **MERN Stack**, **Groq AI**, **PDF parsing**, and **Tailwind CSS + shadcn/ui**. AI Resume Checker allows users to upload their resume as a PDF, extract its content, analyze it using AI, and receive an ATS score with detailed strengths, weaknesses, summary, and improvement suggestions.

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* HTTP Cookie-Based Authentication
* Protected Routes
* Secure Password Handling

### Resume Upload

* Upload Resume in PDF format
* PDF File Validation
* Multer-Based File Upload
* Resume File Storage
* Resume Metadata Management
* PDF Text Extraction using `pdf-parse`

### AI Resume Analysis

* AI-Powered ATS Resume Review
* ATS Score Generation
* Resume Summary
* Strength Identification
* Weakness Identification
* Improvement Suggestions
* Structured JSON AI Response

### Resume Management

* Store Uploaded Resume Information
* Associate Resumes with Users
* Store AI Analysis Results
* Resume Analysis Status Tracking
* View Resume Analysis

### Dashboard

* ATS Score Overview
* Recent Resume Analysis
* Resume History
* Resume Statistics
* Quick Resume Upload

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* shadcn/ui
* Axios
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cookie Parser
* CORS
* Multer
* pdf-parse

### AI

* Groq API
* Llama 3.3 70B Versatile
* AI Prompt Engineering
* Structured JSON Responses

## Project Structure

```text
AI-Resume-Checker/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── utils/
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controller/
│   │   ├── authController.js
│   │   └── resumeController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   │
│   ├── model/
│   │   ├── User.js
│   │   ├── Resume.js
│   │   └── Analysis.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── resumeRoutes.js
│   │
│   ├── services/
│   │   ├── pdfServices.js
│   │   └── geminiServices.js
│   │
│   ├── uploads/
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# Workflow

### User

1. Register an account
2. Login securely
3. Access the protected dashboard
4. Upload a PDF resume
5. Resume is stored using Multer
6. PDF content is extracted using `pdf-parse`
7. Extracted resume text is sent to the AI service
8. AI analyzes the resume
9. ATS score and feedback are generated
10. Resume and analysis data are stored in MongoDB
11. User views the analysis on the dashboard

---

# AI Analysis

The AI analyzes the extracted resume content and returns structured information including:

```json
{
  "atsScore": 0,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}
```

### Analysis Includes

* ATS Score
* Resume Summary
* Strengths
* Weaknesses
* Improvement Suggestions

---

# Database Models

### User

Stores user authentication information.

* Name
* Email
* Password

### Resume

Stores uploaded resume information.

* User ID
* Original File Name
* File Name
* File Path
* Analysis Status
* Created At
* Updated At

### Analysis

Stores AI-generated resume analysis.

* Resume ID
* ATS Score
* Summary
* Strengths
* Weaknesses
* Suggestions
* Created At
* Updated At

---

# API Routes

### Authentication

```text
POST /auth/register
POST /auth/login
POST /auth/logout
```

### Resume

```text
POST /api/resume/upload
```

The resume upload endpoint:

```text
JWT Authentication
        ↓
Multer
        ↓
PDF Upload
        ↓
PDF Text Extraction
        ↓
AI Analysis
        ↓
MongoDB
```

---

# Screenshots

### Landing Page
![Landing Page](screenshot/LandingPage_1)
![Landing Page](screenshot/LandingPage_2)
### Login
![Login Page](screenshot/Login)
### Register
![Registration](screenshot/Registration)
### Dashboard
![Dashboard](screenshot/Dashboard)
### Upload Resume
![Upload Resume](screenshot/Upload)
### Resume History
![History](screenshot/History)
---

# Installation

## Clone Repository

```bash
git clone https://github.com/ayesha2524/AI-Resume-Checker.git

cd AI-Resume-Checker
```

---

## Install Frontend

```bash
cd client

npm install
```

---

## Install Backend

```bash
cd server

npm install
```

---

# Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

GROQ_API_KEY=YOUR_GROQ_API_KEY

CLIENT_URL=http://localhost:5173
```

Never commit your `.env` file to GitHub.

---

# Run Application

## Start Backend

```bash
cd server

npm run dev
```

## Start Frontend

```bash
cd client

npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

# Future Improvements

* AI-Generated Resume
* AI Rewrite of Weak Resume Bullet Points
* Download AI-Generated Resume as PDF
* Resume Version History
* Compare Old and New Resume Versions
* ATS Score Improvement Chart
* Resume Templates
* Job Description vs Resume Matching
* Keyword Optimization
* Resume Recommendations Based on Job Description
* Dark Mode
* Admin Dashboard
* Advanced Analytics

---

# Learning Outcomes

This project demonstrates:

* Full-Stack MERN Development
* REST API Development
* MongoDB & Mongoose
* JWT Authentication
* Cookie-Based Authentication
* React.js
* Tailwind CSS
* shadcn/ui
* File Upload using Multer
* PDF Text Extraction
* AI API Integration
* Prompt Engineering
* Structured AI Responses
* MVC Architecture
* Protected Routes
* API Integration
* Responsive UI Development

---

# Author

**Ayesha Sheikh**

* GitHub: https://github.com/ayesha2524
* LinkedIn: https://www.linkedin.com/in/ayesha-sheikh-722304362/

---

# License

This project is licensed under the MIT License.
