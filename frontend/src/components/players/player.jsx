import React from "react";
import Deck from "../decks/deck";

const Player = (props) => {
  return (
    <div>
      <Deck {...props.playerObj} />
    </div>
  );
};

export default Player;
