import React from "react";
import * as GameLogic from "./game_logic";
import PlayerContainer from "../players/player_container";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.timerId = 0;
    this.state = {
      winner: "",
    };
  }

  componentDidUpdate(prevProps) {
    const {
      cardUpP1,
      cardUpP2,
      addCardToDiscard,
      clearCard,
      deckP1,
      deckP2,
      movePileToDeck,
    } = this.props;
    if (cardUpP1 !== "" && prevProps.cardUpP1 !== this.props.cardUpP1) {
      setTimeout(() => {
        const result = GameLogic.whoWins(cardUpP1, cardUpP2);
        let cards;
        if (result === "p2") {
          this.setState({ winner: "WINNER: P2" });
          cards = [cardUpP1, cardUpP2];
        } else {
          this.setState({ winner: "WINNER: P1" });
          cards = [cardUpP2, cardUpP1];
        }
        clearCard();
        addCardToDiscard(cards, result);

        if (deckP1.length === 0) {
          movePileToDeck("p1");
        }
        if (deckP2.length === 0) {
          movePileToDeck("p2");
        }
      }, 500);
    }
  }

  draw() {
    const { drawCard, deckP1, deckP2 } = this.props;
    //poping out from the deck
    //update global state of deck, cardFaceUp

    this.timerId = setInterval(() => {
      if (deckP1.length > 0 && deckP2.length > 0) {
        this.setState({ winner: "" });
        drawCard();
      } else {
        clearInterval(this.timerId);
      }
    }, 1500);

    // drawCard();
  }

  render() {
    if (this.props.deckP1.length === 0) {
      return <div>"Game Over!"</div>;
    } else {
      return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <PlayerContainer playerId="p1" />
          <PlayerContainer playerId="p2" />
          <div style={{ color: "red" }}>{this.state.winner}</div>
          <button onClick={this.draw.bind(this)}>Play</button>
        </div>
      );
    }
  }
}

export default Game;
