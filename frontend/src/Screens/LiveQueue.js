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
        Laborum nisi nostrud elit ullamco excepteur minim dolore ut voluptate
        deserunt occaecat. Do ea ut do deserunt culpa deserunt. Consequat ipsum
        excepteur sit ut irure ut cillum minim esse excepteur. Sint exercitation
        sunt dolor exercitation pariatur nisi aliqua veniam sint id ex minim.
        Laboris ea veniam qui amet magna fugiat sint commodo consequat et
        voluptate. Commodo aute tempor in nulla ullamco commodo voluptate culpa
        in voluptate deserunt dolor. Est velit dolore culpa anim sit ad amet et
        do sit. Pariatur fugiat ad eu dolor pariatur exercitation veniam
        consectetur. Aliquip mollit cillum dolore eiusmod veniam pariatur
        laboris adipisicing. Reprehenderit amet non in consectetur aliquip
        cupidatat ea reprehenderit. Ea elit aute proident fugiat amet consequat
        enim voluptate. Consequat officia eu in ex veniam officia laborum dolore
        ipsum. Laborum nisi nostrud elit ullamco excepteur minim dolore ut
        voluptate deserunt occaecat. Do ea ut do deserunt culpa deserunt.
        Consequat ipsum excepteur sit ut irure ut cillum minim esse excepteur.
        Sint exercitation sunt dolor exercitation pariatur nisi aliqua veniam
        sint id ex minim. Laboris ea veniam qui amet magna fugiat sint commodo
        consequat et voluptate. Commodo aute tempor in nulla ullamco commodo
        voluptate culpa in voluptate deserunt dolor. Est velit dolore culpa anim
        sit ad amet et do sit. Pariatur fugiat ad eu dolor pariatur exercitation
        veniam consectetur. Aliquip mollit cillum dolore eiusmod veniam pariatur
        laboris adipisicing. Reprehenderit amet non in consectetur aliquip
        cupidatat ea reprehenderit. Ea elit aute proident fugiat amet consequat
        enim voluptate. Consequat officia eu in ex veniam officia laborum dolore
        ipsum. Laborum nisi nostrud elit ullamco excepteur minim dolore ut
        voluptate deserunt occaecat. Do ea ut do deserunt culpa deserunt.
        Consequat ipsum excepteur sit ut irure ut cillum minim esse excepteur.
        Sint exercitation sunt dolor exercitation pariatur nisi aliqua veniam
        sint id ex minim. Laboris ea veniam qui amet magna fugiat sint commodo
        consequat et voluptate. Commodo aute tempor in nulla ullamco commodo
        voluptate culpa in voluptate deserunt dolor. Est velit dolore culpa anim
        sit ad amet et do sit. Pariatur fugiat ad eu dolor pariatur exercitation
        veniam consectetur. Aliquip mollit cillum dolore eiusmod veniam pariatur
        laboris adipisicing. Reprehenderit amet non in consectetur aliquip
        cupidatat ea reprehenderit. Ea elit aute proident fugiat amet consequat
        enim voluptate. Consequat officia eu in ex veniam officia laborum dolore
        ipsum. Laborum nisi nostrud elit ullamco excepteur minim dolore ut
        voluptate deserunt occaecat. Do ea ut do deserunt culpa deserunt.
        Consequat ipsum excepteur sit ut irure ut cillum minim esse excepteur.
        Sint exercitation sunt dolor exercitation pariatur nisi aliqua veniam
        sint id ex minim. Laboris ea veniam qui amet magna fugiat sint commodo
        consequat et voluptate. Commodo aute tempor in nulla ullamco commodo
        voluptate culpa in voluptate deserunt dolor. Est velit dolore culpa anim
        sit ad amet et do sit. Pariatur fugiat ad eu dolor pariatur exercitation
        veniam consectetur. Aliquip mollit cillum dolore eiusmod veniam pariatur
        laboris adipisicing. Reprehenderit amet non in consectetur aliquip
        cupidatat ea reprehenderit. Ea elit aute proident fugiat amet consequat
        enim voluptate. Consequat officia eu in ex veniam officia laborum dolore
        ipsum. Laborum nisi nostrud elit ullamco excepteur minim dolore ut
        voluptate deserunt occaecat. Do ea ut do deserunt culpa deserunt.
        Consequat ipsum excepteur sit ut irure ut cillum minim esse excepteur.
        Sint exercitation sunt dolor exercitation pariatur nisi aliqua veniam
        sint id ex minim. Laboris ea veniam qui amet magna fugiat sint commodo
        consequat et voluptate. Commodo aute tempor in nulla ullamco commodo
        voluptate culpa in voluptate deserunt dolor. Est velit dolore culpa anim
        sit ad amet et do sit. Pariatur fugiat ad eu dolor pariatur exercitation
        veniam consectetur. Aliquip mollit cillum dolore eiusmod veniam pariatur
        laboris adipisicing. Reprehenderit amet non in consectetur aliquip
        cupidatat ea reprehenderit. Ea elit aute proident fugiat amet consequat
        enim voluptate. Consequat officia eu in ex veniam officia laborum dolore
        ipsum. Laborum nisi nostrud elit ullamco excepteur minim dolore ut
        voluptate deserunt occaecat. Do ea ut do deserunt culpa deserunt.
        Consequat ipsum excepteur sit ut irure ut cillum minim esse excepteur.
        Sint exercitation sunt dolor exercitation pariatur nisi aliqua veniam
        sint id ex minim. Laboris ea veniam qui amet magna fugiat sint commodo
        consequat et voluptate. Commodo aute tempor in nulla ullamco commodo
        voluptate culpa in voluptate deserunt dolor. Est velit dolore culpa anim
        sit ad amet et do sit. Pariatur fugiat ad eu dolor pariatur exercitation
        veniam consectetur. Aliquip mollit cillum dolore eiusmod veniam pariatur
        laboris adipisicing. Reprehenderit amet non in consectetur aliquip
        cupidatat ea reprehenderit. Ea elit aute proident fugiat amet consequat
        enim voluptate. Consequat officia eu in ex veniam officia laborum dolore
        ipsum. Laborum nisi nostrud elit ullamco excepteur minim dolore ut
        voluptate deserunt occaecat. Do ea ut do deserunt culpa deserunt.
        Consequat ipsum excepteur sit ut irure ut cillum minim esse excepteur.
        Sint exercitation sunt dolor exercitation pariatur nisi aliqua veniam
        sint id ex minim. Laboris ea veniam qui amet magna fugiat sint commodo
        consequat et voluptate. Commodo aute tempor in nulla ullamco commodo
        voluptate culpa in voluptate deserunt dolor. Est velit dolore culpa anim
        sit ad amet et do sit. Pariatur fugiat ad eu dolor pariatur exercitation
        veniam consectetur. Aliquip mollit cillum dolore eiusmod veniam pariatur
        laboris adipisicing. Reprehenderit amet non in consectetur aliquip
        cupidatat ea reprehenderit. Ea elit aute proident fugiat amet consequat
        enim voluptate. Consequat officia eu in ex veniam officia laborum dolore
        ipsum.
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
