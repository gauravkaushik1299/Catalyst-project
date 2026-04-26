import { runAgent } from "./agent.service.js";

export function runAgentController(req, res) {
  try {
    const { jobDescription } = req.body;

    if (!jobDescription) {
      return res.status(400).json({
        success: false,
        message: "Job description is required",
      });
    }

    // Simple JD parsing (basic version)
    const jd = parseJD(jobDescription);
    const result = runAgent(jd);

    return res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// Basic parser (can upgrade later with LLM)
function parseJD(text) {
  const lowerText = text.toLowerCase();

  const skillsMap = {
    "node.js": ["node", "node.js", "backend"],
    express: ["express", "api"],
    mongodb: ["mongodb", "database"],
    aws: ["aws", "cloud"],
    react: ["react", "frontend"],
  };

  const skills = Object.keys(skillsMap).filter((skill) =>
    skillsMap[skill].some((keyword) => lowerText.includes(keyword)),
  );

  const expMatch = text.match(/\d+/);
  const experience = expMatch ? parseInt(expMatch[0]) : 2;

  return { skills, experience };
}
