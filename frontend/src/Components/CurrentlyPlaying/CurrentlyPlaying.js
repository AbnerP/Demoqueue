import React, { useEffect, useState } from "react";
import "./CurrentlyPlaying.css";
import { useNavigate } from "react-router-dom";

function CurrentlyPlaying(props) {
  const navigate = useNavigate();
  const [timeToLock, setTimeToLock] = useState(30);

//   useEffect(() => {
//     setTimeToLock(30);
//   }, []);

  
//     setInterval(() => {
//       setTimeToLock(timeToLock - 1);
//     }, 1000);

  return (
    <div className="currentlyPlaying__container">
      <button className="sessionCode" onClick={() => navigate("/code")}>
        i
      </button>

      <img
        className="currentlyPlaying__albumwork"
        src={props.albumWorkURL}
        alt={props.name}
      />

      <div className="currentlyPlaying__songInfo">
        <h2>{props.name}</h2>
        <h3>{props.artist}</h3>
      </div>
      
      <div className="currentlyPlaying__lockTimer">
        <h4 className="lockTimer">Song Locks in {timeToLock}s</h4>
      </div>
    </div>
  );
}

export default CurrentlyPlaying;
