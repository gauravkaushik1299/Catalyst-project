# 🤖 AI-Powered Talent Scouting & Engagement Agent

An end-to-end AI agent that helps recruiters:
- Parse job descriptions
- Match candidates
- Simulate candidate interest
- Generate ranked shortlists

---

## 🚀 Features

- 🔍 Job Description Parsing
- 🎯 Candidate Matching with explainability
- 💬 Simulated candidate engagement (interest scoring)
- 📊 Ranked shortlist (Match Score + Interest Score)
- ⚡ Real-time UI with agent-like flow

---

## 🧠 Architecture

User Input (JD)
   ↓
JD Parser
   ↓
Candidate Matching Engine
   ↓
Interest Simulation
   ↓
Scoring + Ranking Engine
   ↓
Frontend Display

---

## ⚙️ Tech Stack

### Backend
- Node.js
- Express.js

### Frontend
- React (Vite)
- CSS

---

## 📦 Setup Instructions

### Backend
cd backend
npm install
npm start

### Frontend
cd frontend
npm install
npm run dev

---

## 🧪 Sample Input

Looking for a Node.js developer with 2 years experience.
Skills required: Node.js, MongoDB, Express.

---

## 📊 Output

- Candidate Name
- Match Score
- Interest Score
- Final Score
- Explanation

---

## 🧠 Scoring Logic

Match Score:
- Skills (70%)
- Experience (30%)

Interest Score:
- Simulated based on match strength

Final Score:
Final = 0.7 * Match + 0.3 * Interest

---

## 🎥 Demo

(Add demo link)

---

## 👨‍💻 Author

Gaurav Kaushik
