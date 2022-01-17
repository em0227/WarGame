import React from "react";
import CardFaceUp from "../cards/card_face_up";
import CardFaceDown from "../cards/card_face_down";

const Deck = ({ cardFaceUp, cardFaceDown }) => {
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
