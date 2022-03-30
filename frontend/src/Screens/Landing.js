import React from "react";
import { useNavigate } from "react-router-dom";
import './Landing.css';

function LangdingPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">DEMOQUEUE.</h1>

      <form className="queueForm"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <input type="text" placeholder="Event Code" />
        <button type="submit">Join Queue</button>
      </form>
      <br /><h3> OR </h3><br />
      <button className="landingPage__button" onClick={() => navigate("/start_event")}>Create Queue</button>
    </div>
  );
}

export default LangdingPage;
