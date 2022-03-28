import React from "react";
import { useNavigate } from "react-router-dom";

function SessionCode() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>SessionCode</h1>
      <button onClick={() => navigate("/queue")}>Back</button>
    </div>
  );
}

export default SessionCode;
