import React from "react";
import CardFaceUp from "../cards/cardFaceUp";
import CardFaceDown from "../cards/cardFaceDown";

const Deck = (props) => {
  const { deck, cardFaceUp, cardFaceDown, id } = props;

  // const isEmpty;

  return (
    <div style={{ display: "flex" }}>
      <div
        className="player-deck"
        style={{
          backgroundColor: "darkGreen",
          width: "100px",
          height: "150px",
          margin: "300px",
        }}
      ></div>
      <div className="player-card-face-up">
        <CardFaceUp card={cardFaceUp} />
      </div>
      <div className="player-card-face-down">
        <CardFaceDown card={cardFaceDown} />
      </div>
    </div>
  );
};

export default Deck;
