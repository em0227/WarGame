import React from "react";
import Deck from "../decks/deck";

const Player = (props) => {
  return (
    <div>
      <Deck playerObj={props.playerObj} cardFaceUp />
    </div>
  );
};

export default Player;
