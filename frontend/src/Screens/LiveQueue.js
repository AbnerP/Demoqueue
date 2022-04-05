import { Snackbar } from "@material-ui/core";
import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import CurrentlyPlaying from "../Components/CurrentlyPlaying/CurrentlyPlaying";
import QueueOptions from "../Components/QueueOptions/QueueOptions";
import SongSuggestion from "../Components/SongSuggestion/SongSuggestion";
import { sampleSongData } from "../Helpers/data";
import sortAndReturnNumerically, {
  sortAndReturnAlphabetically,
} from "../Helpers/sort";
import "./LiveQueue.css";

function LiveQueue() {
  const [currentSong, setCurrentSong] = useState({});
  const [songsInQueue, setSongsInQueue] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [sortedByRank, setSortedByRank] = useState(true);
  const [toastOpen, setToastOpen] = useState(false);

  const handleToastOpen = () => setToastOpen(true);
  const handleToastClose = (event,reason) => {
    if(reason === 'clickaway') return ;

    setToastOpen(false);
  };

  useEffect(() => {
    setCurrentSong({
      name: "The Spins",
      artist: "Mac Miller",
      albumWorkURL:
        "https://i1.sndcdn.com/artworks-PgABAqOMlwzHU78s-skGYBA-t500x500.jpg",
    });
  }, []);

  useEffect(() => {
    sortQueue([...songsInQueue]);
  }, [sortedByRank]);

  const sortQueue = (queue) => {
    if (sortedByRank) {
      setSongsInQueue(sortAndReturnNumerically(queue));
    } else {
      setSongsInQueue(sortAndReturnAlphabetically(queue));
    }
  };

  const addSongToQueue = (name, artist) => {
    if(songsInQueue.filter(song => song.name === name && song.artist === artist).length > 0){
      console.log("Song is already in queue");
      handleToastOpen();
      return ;
    }
    
    let queueCopy = [...songsInQueue];

    queueCopy.push({
      name: name,
      artist: artist,
      votes: 0,
    });

    sortQueue(queueCopy);
  };

  const upVote = (index, switchVote) => {
    let queueCopy = [...songsInQueue];

    queueCopy[index].votes += switchVote ? 2 : 1;

    sortQueue(queueCopy);
  };

  const downVote = (index, switchVote) => {
    let queueCopy = [...songsInQueue];

    queueCopy[index].votes -= switchVote ? 2 : 1;

    sortQueue(queueCopy);
  };

  const deleteSuggestion = (index) => {
    let queueCopy = [...songsInQueue];

    queueCopy.splice(index, 1);

    sortQueue(queueCopy);
  };

  const toggleSortType = () => {
    setSortedByRank(!sortedByRank);
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

      <QueueOptions
        sortedByRank={sortedByRank}
        toggleSortType={toggleSortType}
        addSongToQueue={addSongToQueue}
      />

      <div className="song__queue">
        {songsInQueue.map((song, index) => (
          <SongSuggestion
            key={`${song.name} ${song.artist}`}
            isAdmin={isAdmin}
            name={song.name}
            artist={song.artist}
            votes={song.votes}
            index={index}
            upVote={upVote}
            downVote={downVote}
            deleteSuggestion={deleteSuggestion}
          />
        ))}
      </div>

      <Snackbar
        open={toastOpen}
        autoHideDuration={4000}
        onClose={handleToastClose}
      >
        <Alert onClose={handleToastClose} severity="error" sx={{ width: '100%' }}>
          Song is already in the Queue
        </Alert>
      </Snackbar>
    </div>
  );
}

export default LiveQueue;
