import React from "react";
import { CardFaceUp } from "../cards/cardFaceUp";
import { CardFaceDown } from "../cards/cardFaceDown";

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.deck = props.deck;
    this.cardFaceUp = "";
    this.cardFaceDown = 0;
  }

  draw() {
    //poping out from the deck
    //updating local state of cardFaceUp
  }

  isEmpty() {}

  render() {
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
          <CardFaceUp card={this.cardFaceUp} />
        </div>
        <div className="player-card-face-down">
          <CardFaceDown card={this.cardFaceDown} />
        </div>
      </div>
    );
  }
}

export default Deck;
