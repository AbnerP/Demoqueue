import React, { useState } from "react";
import "./SongSuggestion.css";
import { IconButton } from "@material-ui/core";
import { ArrowDropUp, ArrowDropDown } from "@material-ui/icons";

function SongSuggestion(props) {
  return (
    <div className="song__card">
      <div className="song__info">
        <h3>{props.name}</h3>
        <h4>{props.artist}</h4>
      </div>

      <div className="song__interactions">
        <div className="votes__counter--container">
          <span className="song__votes song__votes--number">{props.votes}</span>
          <span className="song__votes song__votes--text">votes</span>
        </div>

        <div className="song__interactions--voting">
          <IconButton
            style={{ color: "#4BB543"}}
            onClick={() => props.upVote(props.index)}
          >
            <ArrowDropUp style={{ transform:"scale(1.5)"}}/>
          </IconButton>
          <IconButton
            style={{ color: "#eb5534"}}
            onClick={() => props.downVote(props.index)}
          >
            <ArrowDropDown style={{ transform:"scale(1.5)"}}/>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SongSuggestion;
