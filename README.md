# 🤖 AI-Powered Talent Scouting & Engagement Agent

An end-to-end AI agent that automates candidate discovery, evaluation, and ranking for recruiters.

---

## 🎯 Problem

Recruiters spend significant time manually screening candidates, evaluating skills, and estimating interest.

---

## 💡 Solution

This system:

- Parses job descriptions
- Matches candidates based on skills & experience
- Simulates candidate interest
- Generates a ranked shortlist with explanations

---

## 🚀 Live Demo

Frontend: https://catalyst-project-nu.vercel.app/
Backend: https://catalyst-project-zwhi.onrender.com

---

## ⚙️ Tech Stack

### Backend

- Node.js
- Express.js

### Frontend

- React (Vite)
- CSS

### Deployment

- Frontend: Vercel
- Backend: Render

---

## 🔍 How It Works

1. User inputs a job description
2. System extracts required skills & experience
3. Candidates are evaluated using scoring logic
4. Weak matches are filtered out
5. Top candidates are ranked and displayed

---

## 📊 Scoring Logic

### Match Score

- Skill Match (70%)
- Experience Match (30%)
- Bonus for strong profiles
- Capped at 100

### Interest Score

- Derived from match strength
- Adds controlled randomness to simulate real-world behavior

### Final Score

```
Final Score = 0.7 × Match Score + 0.3 × Interest Score
```

---

## 🔎 Filtering Strategy

To avoid noisy results:

- Minimum skill match threshold applied
- Minimum score threshold enforced
- Top 10 candidates selected

---

## 🧪 Sample Input

```
Looking for a backend developer with Node.js, MongoDB, Express, AWS, 3+ years experience
```

---

## 📊 Sample Output

```json
[
  {
    "name": "Rahul Sharma",
    "matchScore": 100,
    "interestScore": 84,
    "finalScore": 95
  },
  {
    "name": "Anjali Mehta",
    "matchScore": 65,
    "interestScore": 76,
    "finalScore": 68
  }
]
```

---

## 📦 Setup Instructions

### Backend

```
cd backend
npm install
npm start
```

### Frontend

```
cd frontend
npm install
npm run dev
```

---

## 🌐 Deployment Notes

- Frontend is deployed on Vercel
- Backend is deployed on Render
- API communication handled using environment variables

---

## 🎥 Demo Video

<<<<<<< HEAD
https://www.loom.com/share/f0692d4b6c743d5835dd9d1336f7fc2
=======
(Add demo video link here)
>>>>>>> c658e098c03fbdf178cf942c03f81df21141e537

---

## 👨‍💻 Author

Gaurav Kaushik
