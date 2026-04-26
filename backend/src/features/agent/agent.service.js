import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { calculateMatchScore } from "./match.engine.js";
import { calculateInterestScore } from "./interest.engine.js";
import { calculateFinalScore, rankCandidates } from "./ranking.engine.js";

// Fix __dirname (since ES modules don't have it)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load candidates.json manually
const dataPath = path.join(__dirname, "../../data/candidates.json");
const candidatesData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

export function runAgent(jd) {
  const results = [];

  for (const candidate of candidatesData) {
    const match = calculateMatchScore(candidate, jd);

    // 🔥 NEW: skill-based filtering (important)
    const skillMatchRatio =
      match.matchedSkills.length / (jd.skills.length || 1);

    if (jd.skills.length >= 3 && skillMatchRatio < 0.4) continue;
    if (jd.skills.length < 3 && skillMatchRatio < 0.6) continue;
    // existing score filter
    if (match.score < 70) continue;

    const interest = calculateInterestScore(match.score, candidate);

    const finalScore = calculateFinalScore(match.score, interest.score);

    results.push({
      name: candidate.name,
      skills: candidate.skills,
      matchScore: match.score,
      interestScore: interest.score,
      finalScore,
      explanation: `${match.explanation}, ${interest.explanation}`,
    });
  }

  return rankCandidates(results);
}
