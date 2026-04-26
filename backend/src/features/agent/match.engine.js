export function calculateMatchScore(candidate, jd) {
  const jdSkills = jd.skills || [];
  const requiredExp = jd.experience || 1;

  const candidateSkills = candidate.skills || [];

  let matchedSkills = [];
  let partialMatches = [];

  // 🔹 Smart skill matching (exact + partial)
  for (const jdSkill of jdSkills) {
    const jdLower = jdSkill.toLowerCase();

    const exact = candidateSkills.find((s) => s.toLowerCase() === jdLower);

    if (exact) {
      matchedSkills.push(exact);
    } else {
      // partial match (Node vs Node.js, Mongo vs MongoDB)
      const partial = candidateSkills.find(
        (s) =>
          s.toLowerCase().includes(jdLower) ||
          jdLower.includes(s.toLowerCase()),
      );

      if (partial) {
        partialMatches.push(partial);
      }
    }
  }

  // 🔹 Skill scoring
  const exactWeight = 1;
  const partialWeight = 0.5;

  const totalSkillScore =
    matchedSkills.length * exactWeight + partialMatches.length * partialWeight;

  const maxSkillScore = jdSkills.length || 1;

  const skillMatchRatio = totalSkillScore / maxSkillScore;

  // 🔹 Experience scoring (realistic)
  let experienceScore = 0;

  if (candidate.experience >= requiredExp) {
    experienceScore = 1;
  } else {
    // penalize if below requirement
    experienceScore = candidate.experience / requiredExp;
  }

  // 🔹 Bonus logic (top candidates stand out)
  let bonus = 0;

  if (matchedSkills.length === jdSkills.length) {
    bonus += 5; // perfect skill match
  }

  if (candidate.experience > requiredExp + 2) {
    bonus += 5; // strong experience
  }

  // 🔹 Final score
  const matchScore = skillMatchRatio * 70 + experienceScore * 30 + bonus;
  const finalScore = Math.min(matchScore, 100);

  return {
    score: Math.round(finalScore),
    matchedSkills,
    partialMatches,
    explanation: `
      Exact matches: ${matchedSkills.length},
      Partial matches: ${partialMatches.length},
      Experience: ${candidate.experience} yrs
    `,
  };
}
