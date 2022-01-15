import React from "react";
import { CardFaceUp } from "../cards/cardFaceUp";
import { CardFaceDown } from "../cards/cardFaceDown";

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.deck = props.playerObj.deck;
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.deck !== this.props.deck) {
  //     this.cardFaceUp = this.props.playerObj.deck[0];
  //     this.cardFaceDown = this.props.playerObj.cardFaceDown.length;
  //   }
  // }

  draw() {
    //poping out from the deck
    //update global state of cardFaceUp
    const card = this.deck.pop();
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
          <CardFaceUp card={this.props.playerObj.deck[0]} />
        </div>
        <div className="player-card-face-down">
          <CardFaceDown card={this.props.playerObj.cardFaceDown} />
        </div>
      </div>
    );
  }
}

export default Deck;
