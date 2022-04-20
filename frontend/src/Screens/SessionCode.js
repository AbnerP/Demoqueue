import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SessionCode.css";
import axios from "axios";

function SessionCode(props) {
  const id = props.id;
  const [temp, setTemp] = useState("");
  const [url, setUrl] = useState("https://www.google.com/");
  const [size] = useState(400);
  const [qrCode, setQrCode] = useState("");
 
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${url}!&size=${size}x${size}`
    );
    
  }, [url, size]);

  function handleClick() {
    setUrl(temp);
  }

  const navigate = useNavigate();
  return (
    <div className="main">
      <h1>Current Session Code</h1>
      <button onClick={() => navigate("/queue")}>Back</button>
      <div className="input-box">
        <div className="gen">
          <input
            type="text"
            onChange={(e) => {
              setTemp(e.target.value);
            }}
            placeholder="Enter queue #"
          />
          <button className="button" onClick={handleClick}>
            Generate
          </button>
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button" className="download-button">
            Download
          </button>
        </a>
      </div>
    </div>
  );
}

export default SessionCode;
