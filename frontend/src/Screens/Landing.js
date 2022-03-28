import React from "react";
import { useNavigate } from "react-router-dom";

function LangdingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Demoqueue</h1>
      <button onClick={() => navigate("/queue")}>Create Queue</button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <input type="text" />
        <button type="submit">Join Queue</button>
      </form>
    </div>
  );
}

export default LangdingPage;
