import React, { useEffect, useState } from "react";
import CurrentlyPlaying from "../Components/CurrentlyPlaying/CurrentlyPlaying";
import SongSuggestion from "../Components/SongSuggestion/SongSuggestion";
import { sampleSongData } from "../Helpers/data";
import sortAndReturn from "../Helpers/sort";
import "./LiveQueue.css";

function LiveQueue() {
  const [currentSong, setCurrentSong] = useState({});
  const [songsInQueue, setSongsInQueue] = useState([]);

  useEffect(() => {
    setCurrentSong({
      name: "The Spins",
      artist: "Mac Miller",
      albumWorkURL:
        "https://i1.sndcdn.com/artworks-PgABAqOMlwzHU78s-skGYBA-t500x500.jpg",
    });

    for (let song of sampleSongData) {
      addSongToQueue(song.name, song.artist);
    }
  }, []);

  const addSongToQueue = (name, artist) => {
    let queueCopy = songsInQueue;

    queueCopy.push({
      name: name,
      artist: artist,
      votes: 0,
    });

    setSongsInQueue(sortAndReturn(queueCopy));
  };

  const upVote = (index) => {
    let queueCopy = [...songsInQueue];

    queueCopy[index].votes += 1;

    setSongsInQueue(sortAndReturn(queueCopy));
  };

  const downVote = (index) => {
    let queueCopy = [...songsInQueue];

    queueCopy[index].votes -= 1;

    setSongsInQueue(sortAndReturn(queueCopy));
  };

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
        {songsInQueue.map((song, index) => (
          <SongSuggestion
            key={`${song.name} ${song.artist}`}
            name={song.name}
            artist={song.artist}
            votes={song.votes}
            index={index}
            upVote={upVote}
            downVote={downVote}
          />
        ))}
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
