import React from "react";
import Deck from "../decks/deck";
import DiscardPile from "../discard_piles/discard_piles";

const Player = (props) => {
  return (
    <div>
      <Deck {...props} />
      <DiscardPile playerId={props.id} />
    </div>
  );
};

export default Player;
