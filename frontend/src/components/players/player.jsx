import React from "react";
import Deck from "../decks/deck";
import DiscardPile from "../discard_piles/discard_piles";
import CardFaceUp from "../cards/card_face_up";
import CardFaceDown from "../cards/card_face_down";

const Player = (props) => {
  const style = props.id === "p2" ? { flexDirection: "row-reverse" } : {};
  return (
    <div className="player" style={style}>
      <div className="dd">
        <Deck {...props} />
        <DiscardPile playerId={props.id} />
      </div>
      <div className="cards">
        <CardFaceUp card={props.cardFaceUp} />
        <CardFaceDown card={props.cardFaceDown} />
      </div>
    </div>
  );
};

export default Player;
