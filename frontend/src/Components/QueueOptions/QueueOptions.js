import React, { useState } from "react";
import { Box, Button, IconButton, Modal, Typography } from "@material-ui/core";
import { Add, Sort } from "@material-ui/icons";
// import Modal from "../Modal/Modal";
import "./QueueOptions.css";
import AddSongPopUp from "../AddSongPopUp/AddSongPopUp";


function QueueOptions(props) {
  const [addSongsOpen, setAddSongsOpen] = useState(false);
  const handleOpen = () => setAddSongsOpen(true);
  const handleClose = () => setAddSongsOpen(false);

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
        <AddSongPopUp onClose={handleClose}/>
      </Modal>
    </div>
  );
}

export default QueueOptions;
