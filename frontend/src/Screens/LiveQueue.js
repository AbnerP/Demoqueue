import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CurrentlyPlaying from "../Components/CurrentlyPlaying/CurrentlyPlaying";
import "./LiveQueue.css";

function LiveQueue() {
  const navigate = useNavigate();

  const [currentSong, setCurrentSong] = useState({
    name: " ",
    artist: " ",
    albumWorkURL: " ",
  });

  const [playbackStatus, setPlaybackStatus] = useState({
    time: "",
    total: "",
  });

  useEffect(() => {
    setCurrentSong({
      name: "The Spins",
      artist: "Mac Miller",
      albumWorkURL:
        "https://i1.sndcdn.com/artworks-PgABAqOMlwzHU78s-skGYBA-t500x500.jpg",
    });
  }, []);

  return (
    <div>
      <div className="queue__header">
        <CurrentlyPlaying
          name={currentSong.name}
          artist={currentSong.artist}
          albumWorkURL={currentSong.albumWorkURL}
        />
      </div>

      <div className="song__queue">
        
      </div>

      <div
        onClick={() => {
          console.log("clicked: Request Song");
        }}
        className="song__request--container"
      >
        <p className="song__request--text">Request Song</p>
      </div>
    </div>
  );
}

export default LiveQueue;
