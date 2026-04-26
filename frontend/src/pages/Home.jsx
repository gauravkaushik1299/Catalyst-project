import { useState } from "react";
import axios from "axios";
import JDInput from "../components/JDInput";
import CandidateCard from "../components/CandidateCard";
import AgentSteps from "../components/AgentSteps";

function Home() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasRun, setHasRun] = useState(false);

  const runAgent = async (jdText) => {
    if (!jdText) return;

    setLoading(true);
    setResults([]);
    setError(null);
    setHasRun(true);

    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + "/run-agent", {
        jobDescription: jdText,
      });
      console.log("API URL:", import.meta.env.VITE_API_URL);

      setTimeout(() => {
        const raw = res.data?.data;

        const clean = Array.isArray(raw)
          ? raw.filter(
            (item) =>
              item &&
              typeof item === "object" &&
              item.name &&
              Array.isArray(item.skills)
          )
          : [];

        setResults(clean);
        setLoading(false);

        // smooth scroll to results
        setTimeout(() => {
          document.querySelector(".grid")?.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      }, 800); // slightly faster UX
    } catch (err) {
      console.error("API Error:", err);
      setError("Failed to run agent. Please try again.");
      setLoading(false);
    }


  };

  return (<div className="container"> <h1 className="title">🤖 AI Talent Scouting Agent</h1> <p className="subtitle">
    Automated candidate matching & ranking </p>

    < JDInput onSubmit={runAgent} loading={loading} />

    {/* Error */}
    {
      error && (
        <p
          style={{
            color: "#ef4444",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          {error}
        </p>
      )
    }

    {/* Loading */}
    {
      loading && (
        <div className="fade-in">
          <AgentSteps />
        </div>
      )
    }

    {/* Empty State */}
    {
      hasRun && !loading && results.length === 0 && (
        <p className="empty">
          No strong matches found. Try a different job description.
        </p>
      )
    }

    {/* Summary */}
    {
      !loading && results.length > 0 && (
        <h3
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#333",
          }}
        >
          Showing Top {results.length} Candidates
        </h3>
      )
    }

    {/* Results */}
    <div
      className={`grid ${!loading && results.length ? "fade-in" : ""
        }`}
    >
      {results.map((c, i) =>
        c ? (
          <CandidateCard
            key={i}
            candidate={c}
            rank={i + 1}
          />
        ) : null
      )}
    </div>
  </div >


  );
}

export default Home;
