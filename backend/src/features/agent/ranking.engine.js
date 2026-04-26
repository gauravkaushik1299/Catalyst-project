export function calculateFinalScore(matchScore, interestScore) {
  const finalScore = matchScore * 0.7 + interestScore * 0.3;

  return Math.min(Math.round(finalScore), 100);
}

export function rankCandidates(candidates) {
  return candidates.sort((a, b) => b.finalScore - a.finalScore).slice(0, 10); // 🔥 ONLY TOP 10
}
