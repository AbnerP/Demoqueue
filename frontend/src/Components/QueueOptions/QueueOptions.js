import React, { useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import { Add, Sort } from "@material-ui/icons";
import "./QueueOptions.css";

function QueueOptions(props) {

  return (
    <div className="QueueOptions">
      <Button
        color="primary"
        startIcon={<Sort />}
        onClick={() => { props.toggleSortType()}}
      >
        Sort {props.sortedByRank ? "Alphabetically" : "by Rank"}
      </Button>
      <Button endIcon={<Add />} color="primary">
        Add Song
      </Button>
    </div>
  );
}

export default QueueOptions;
