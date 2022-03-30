import { Box, Button, IconButton, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Close } from "@material-ui/icons";
import React from "react";
const BOX_STYLE = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: "75%",
  height: "75vh",
  borderRadius:"1rem",

  bgcolor: "background.paper",

  display: "flex",
  alignItems:"center",
  flexDirection:"column",
};

const EXIT_BUTTON = {
  position: "absolute",
  top: ".5rem",
  right: ".5rem",
  transform: "scale(1.3)"
};

const SEARCH_TEXT = {
  paddingTop:"2rem",
  margin:0
};

function AddSongPopUp(props) {
  return (
    <Box sx={BOX_STYLE}>
      <Typography 
      style={SEARCH_TEXT}
      variant="h5" component="h2" align="center" color="">
        Song Search
      </Typography>

      <IconButton style={EXIT_BUTTON} onClick={props.onClose}>
        <Close />
      </IconButton>

      <input type="text" placeholder="Song Name" />
    </Box>
  );
}

export default AddSongPopUp;
