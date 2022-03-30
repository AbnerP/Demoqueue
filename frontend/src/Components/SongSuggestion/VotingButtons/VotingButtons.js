import { IconButton } from "@material-ui/core";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import React, { useState } from "react";
import "./VotingButtons.css";

function VotingButtons(props) {
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);

  return (
    <div className="votingButtons">
      <IconButton
        style={{ color: `${upVoted ? "gray" : "#4BB543"}` }}
        onClick={() => {
          if (upVoted) {
            props.downVote(props.index, false);
            setUpVoted(false);
            return;
          }

          props.upVote(props.index, downVoted);
          setUpVoted(true);
          setDownVoted(false);
        }}
      >
        <ArrowDropUp style={{ transform: "scale(1.5)" }} />
      </IconButton>
      <IconButton
        style={{ color: `${downVoted ? "gray" : "#eb5534"}` }}
        onClick={() => {
          if (downVoted) {
            props.upVote(props.index, false);
            setDownVoted(false);
            return;
          }

          props.downVote(props.index, upVoted);
          setDownVoted(true);
          setUpVoted(false);
        }}
      >
        <ArrowDropDown style={{ transform: "scale(1.5)" }} />
      </IconButton>
    </div>
  );
}

export default VotingButtons;
