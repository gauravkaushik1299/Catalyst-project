export function calculateInterestScore(matchScore, candidate) {
  const experience = candidate.experience || 1;

  // 🔹 Base interest from match
  let baseInterest = matchScore * 0.7;

  // 🔹 Experience effect (more experienced = slightly less likely to be desperate)
  let experienceEffect = 0;
  if (experience >= 5) {
    experienceEffect = -5; // senior devs are selective
  } else if (experience <= 2) {
    experienceEffect = +5; // juniors more eager
  }

  // 🔹 Controlled randomness (less chaotic)
  const randomness = Math.floor(Math.random() * 10); // small variation

  let interestScore = baseInterest + experienceEffect + randomness;

  // clamp between 0–100
  interestScore = Math.max(0, Math.min(interestScore, 100));

  // 🔹 Smarter explanation
  let explanation = "";

  if (interestScore > 75) {
    explanation = "Highly interested due to strong match";
  } else if (interestScore > 50) {
    explanation = "Moderately interested, decent alignment";
  } else {
    explanation = "Low interest due to weak match";
  }

  return {
    score: Math.round(interestScore),
    explanation,
  };
}
