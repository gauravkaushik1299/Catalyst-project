function ScoreBar({ value = 0 }) {
  const safeValue = Math.min(Math.max(value, 0), 100); // clamp between 0–100

  let color = "#ef4444";
  if (safeValue > 75) color = "#22c55e";
  else if (safeValue > 50) color = "#eab308";

  return (<div className="bar">
    <div
      className="fill"
      style={{
        width: `${safeValue}%`,
        background: color,
        transition: "width 0.6s ease",
      }}
    /> </div>
  );
}

function CandidateCard({ candidate, rank }) {
  if (!candidate) return null;

  const {
    name = "Unknown",
    skills = [],
    matchScore = 0,
    interestScore = 0,
    finalScore = 0,
    explanation = "No explanation",
  } = candidate;

  const safeMatch = Math.min(Math.round(matchScore), 100);
  const safeInterest = Math.min(Math.round(interestScore), 100);
  const safeFinal = Math.min(Math.round(finalScore), 100);

  return (
    <div
      className={`card ${safeFinal > 80 ? "top" : ""} ${rank === 1 ? "best" : ""
        }`}
    >
      {/* Rank Badge */}
      <div className={`rank ${rank === 1 ? "gold" : ""}`}>#{rank}</div>

      {/* Name */}
      <h2>
        {name}
        {safeFinal > 80 && <span className="star">⭐</span>}
      </h2>

      {/* Skills */}
      <div className="skills">
        {Array.isArray(skills) &&
          skills.map((skill, i) => (
            <span key={i} className="skill">
              {skill}
            </span>
          ))}
      </div>

      {/* Match Score */}
      <p>Match Score: {safeMatch}/100</p>
      <ScoreBar value={safeMatch} />

      {/* Interest Score */}
      <p>Interest Score: {safeInterest}/100</p>
      <ScoreBar value={safeInterest} />

      {/* Final Score */}
      <p className="final">Final Score: {safeFinal}/100</p>

      {/* Explanation */}
      <div className="explanation">
        <strong>Why selected:</strong>
        <p>{explanation}</p>
      </div>
    </div>


  );
}

export default CandidateCard;
