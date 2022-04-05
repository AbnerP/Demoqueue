import React, { useState } from "react";
import { Box, Button, IconButton, Modal, Snackbar, Typography } from "@material-ui/core";
import { Add, Sort } from "@material-ui/icons";
import { Close } from "@material-ui/icons";
import { sampleSongData } from "../../Helpers/data";
// import Modal from "../Modal/Modal";
import "./QueueOptions.css";
import AddSongPopUp from "../AddSongPopUp/AddSongPopUp";

function QueueOptions(props) {
  const [addSongsOpen, setAddSongsOpen] = useState(false);
  const handleOpen = () => setAddSongsOpen(true);
  const handleClose = () => setAddSongsOpen(false);
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = sampleSongData.filter((song) => {
    if (inputText === "") return song;

    return (
      song.name.toLowerCase().includes(inputText) ||
      song.artist.toLowerCase().includes(inputText)
    );
  });

  return (
    <div className="QueueOptions">
      <Button
        color="primary"
        startIcon={<Sort />}
        onClick={() => {
          props.toggleSortType();
        }}
      >
        Sort {props.sortedByRank ? "Alphabetically" : "by Rank"}
      </Button>
      <Button endIcon={<Add />} color="primary" onClick={handleOpen}>
        Add Song
      </Button>

      <Modal open={addSongsOpen} onClose={handleClose}>
        <Box sx={BOX_STYLE}>
          <Typography
            style={SEARCH_TEXT}
            variant="h5"
            component="h2"
            align="center"
          >
            Song Search
          </Typography>

          <IconButton style={EXIT_BUTTON} onClick={handleClose}>
            <Close />
          </IconButton>

          <input type="text" placeholder="Song Name" onChange={inputHandler} />

          <Box sx={ITEM_BOX_STYLE}>
            {filteredData.map((song) => (
              <Box
                key={song.name}
                onClick={() => {
                  console.log(`Adding: ${song.name}`);
                  props.addSongToQueue(song.name, song.artist);
                  handleClose();
                }}
                style={containerStyle}
              >
                <Typography style={nameStyle} variant="h5" component="h3">
                  {song.name}
                </Typography>
                <Typography style={artistStyle} variant="h6" component="h4">
                  {song.artist}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>

    </div>
  );
}

const BOX_STYLE = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  
  width: "75%",
  height: "75vh",
  borderRadius: "1rem",
  
  // bgcolor: "background.paper",
  backgroundColor:"#1c0835",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const EXIT_BUTTON = {
  position: "absolute",
  top: ".5rem",
  right: ".5rem",
  color:"white",
  transform: "scale(1.3)",
};

const SEARCH_TEXT = {
  paddingTop: "2rem",
  margin: 0,
};

const containerStyle = {
  width: "53.5vw",
  borderBottom:"1px solid gray",
  paddingBottom:"1rem",
  // width: "75%",
  
  color: "white",
  // backgroundColor: "#ededed",
  
  // borderRadius: "1rem",
  
  // padding: "1rem",
  margin: "1rem 0",
};

const ITEM_BOX_STYLE = {
  overflowY: "auto",
  paddingBottom: "2rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
};

const nameStyle = {
  fontSize: "18px",
};

const artistStyle = {
  fontSize: "15px",
  color: "#cccccc",
};

export default QueueOptions;
