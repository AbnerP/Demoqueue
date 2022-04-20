import { Snackbar } from "@material-ui/core";
import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import CurrentlyPlaying from "../Components/CurrentlyPlaying/CurrentlyPlaying";
import QueueOptions from "../Components/QueueOptions/QueueOptions";
import SongSuggestion from "../Components/SongSuggestion/SongSuggestion";
import sortAndReturnNumerically, {
  sortAndReturnAlphabetically
} from "../Helpers/sort";
import "./LiveQueue.css";
import io from "socket.io-client";

let socket = io.connect("http://localhost:8082");

function LiveQueue() {
  const [currentSong, setCurrentSong] = useState({});
  const [songsInQueue, setSongsInQueue] = useState([]);
  const queueRef = React.useRef(songsInQueue);
  const [isAdmin, setIsAdmin] = useState(false);
  const [sortedByRank, setSortedByRank] = useState(true);
  const [toastOpen, setToastOpen] = useState(false);
  const handleToastOpen = () => setToastOpen(true);
  const handleToastClose = (event,reason) => {
    if(reason === 'clickaway') return ;
    setToastOpen(false);
  };

  useEffect(() => {
    queueRef.current = songsInQueue;
  });

  useEffect(() => {
    socket.on("send_vote", vote => {
      console.log('useEffect on send vote');
      let queueCopy = [...queueRef.current];
      const idx = queueCopy.findIndex(song => song.id === vote.song);
      queueCopy[idx].votes += vote.change;
      sortQueue(queueCopy);
    });
  }, []);

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

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let event_name = params.get('event_name');
    const requestOptions = {
      method: 'GET',
      credentials: 'include',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
    fetch('http://localhost:8082/event_songs?event_name='+event_name, requestOptions).then(res => res.json()).then(data => {
      console.log("Got all songs from API", data.songs);
      let song_list = [...songsInQueue]
      data.songs.forEach(song => {
        song_list.push({name: song.name, artist: song.artist, id: song.id, votes: song.votes});
      });
      sortQueue(song_list)
    });
  }, [])

  const updateCurrentlyPlaying = () => {

  }

  const sortQueue = (queue) => {
    if (sortedByRank) {
      setSongsInQueue(sortAndReturnNumerically(queue));
    } else {
      setSongsInQueue(sortAndReturnAlphabetically(queue));
    }
  };

  const addSongToQueue = (name, artist) => {
    if(songsInQueue.filter(song => song.name === name && song.artist === artist).length > 0){
      handleToastOpen();
      return ;
    }
    
    let queueCopy = [...songsInQueue];

    queueCopy.unshift({
      name: name,
      artist: artist,
      votes: 1,
    });

    sortQueue(queueCopy);
  };

  const upVote = (index, switchVote) => {
    let queueCopy = [...songsInQueue];
    socket.emit("vote", {"song": queueCopy[index].id,  "change": switchVote ? 2 : 1});
    queueCopy[index].votes += switchVote ? 2 : 1;
    sortQueue(queueCopy);
  };

  const downVote = (index, switchVote) => {
    let queueCopy = [...songsInQueue];
    socket.emit("vote", {"song": queueCopy[index].id,  "change": switchVote ? -2 : -1});
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
            id={song.id}
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
