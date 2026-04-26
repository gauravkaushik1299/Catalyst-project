import { useState } from "react";

function JDInput({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <div className="card">
      <textarea
        className="textarea"
        rows="5"
        placeholder="Paste Job Description here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="button"
        onClick={() => onSubmit(text)}
      >
        Run Agent
      </button>
    </div>
  );
}

export default JDInput;