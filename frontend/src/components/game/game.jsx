import React from "react";
import * as GameLogic from "./game_logic";
import PlayerContainer from "../players/player_container";
import { winner } from "../../actions/winner_action";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.timerId = 0;
    this.state = {
      winner: "",
      status: "",
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
        if (result === "war") {
          //dispatch state war to true
          //clear timerid
          //save the cardUp to cardDown and invoke warDraw
          //may need to add differnt condiiton in the compDidUpdate to address moving cardUp & cardDown to discardPile
        } else if (result === "p2") {
          this.setState({ winner: "WINNER: P2" });
          cards = [cardUpP1, cardUpP2];
        } else {
          this.setState({ winner: "WINNER: P1" });
          cards = [cardUpP2, cardUpP1];
        }

        addCardToDiscard(cards, result);
        clearCard();

        if (deckP1.length === 0) {
          this.setState({ status: "Move Pile to Deck" });
          movePileToDeck("p1");
        }
        if (deckP2.length === 0) {
          this.setState({ status: "Move Pile to Deck" });
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
        this.setState({ winner: "", status: "" });
        drawCard();
      }
    }, 1000);

    // drawCard();
  }

  warDraw() {
    //if global state war is true, clearInveral this.timerId
    //set new interval on war draw until war ends and call draw again
  }

  render() {
    const { deckP1, deckP2, cardUpP1, cardUpP2, discardP1, discardP2, winner } =
      this.props;
    const p1 = deckP1.length === 0 && cardUpP1 === "" && discardP1.length === 0;
    const p2 = deckP2.length === 0 && cardUpP2 === "" && discardP2.length === 0;
    if (p1 || p2) {
      clearInterval(this.timerId); //won't be able to show the last round winner as it will render this
      if (p1) {
        //final winner is p2
        winner("P1");
      } else {
        //final winner is p1
        winner("P2");
      }
      return <div style={{ color: "red" }}>Game Over!</div>;
    } else {
      return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <PlayerContainer playerId="p1" />
          <PlayerContainer playerId="p2" />
          <div style={{ color: "red" }}>{this.state.winner}</div>
          <div style={{ color: "red" }}>{this.state.status}</div>
          <button onClick={this.draw.bind(this)}>Play</button>
        </div>
      );
    }
  }
}

export default Game;
