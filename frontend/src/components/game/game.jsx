import React from "react";
import * as GameLogic from "./game_logic";
import PlayerContainer from "../players/player_container";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.timerId = null;
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
    if (
      // !warStatus &&
      cardUpP1 !== "" &&
      cardUpP2 !== "" &&
      prevProps.cardUpP1 !== this.props.cardUpP1
    ) {
      setTimeout(() => {
        const result = GameLogic.whoWins(cardUpP1, cardUpP2);
        let cards;
        if (result === "war") {
          //dispatch state war to true
          //clear timerid
          //save the cardUp to cardDown and invoke warDraw
          //may need to add differnt condiiton in the compDidUpdate to address moving cardUp & cardDown to discardPile
          clearInterval(this.timerId);
          this.setState({ status: "WAR!!!" });
          this.warDraw();
          return;
        } else if (result === "p2") {
          // war(false);
          if (this.state.status === "WAR!!!") {
            clearInterval(this.timerId);
            this.setState({ status: "" });
            this.draw();
          }
          this.setState({ winner: "WINNER: P2" });
          cards = [cardUpP1, cardUpP2];
        } else {
          // war(false);
          if (this.state.status === "WAR!!!") {
            clearInterval(this.timerId);
            this.setState({ status: "" });
            this.draw();
          }
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
      }, 1000);
    }
  }

  draw() {
    const { drawCard, deckP1, deckP2 } = this.props;
    //poping out from the deck
    //update global state of deck, cardFaceUp
    // clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      if (deckP1.length > 0 && deckP2.length > 0) {
        this.setState({ winner: "", status: "" });
        drawCard();
      }
    }, 2000);

    // drawCard();
  }

  warDraw() {
    //if global state war is true, clearInveral this.timerId
    //set new interval on war draw until war ends and call draw again
    const {
      winner,
      deckP1,
      deckP2,
      addCardsToFaceDown,
      discardP1,
      discardP2,
      movePileToDeck,
    } = this.props;

    this.timerId = setInterval(() => {
      if (deckP1.length >= 2 && deckP2.length >= 2) {
        addCardsToFaceDown();
      } else if (deckP1.length < 2 && discardP1.length > 0) {
        movePileToDeck("p1");
        addCardsToFaceDown();
      } else if (deckP2.length < 2 && discardP2.length > 0) {
        movePileToDeck("p2");
        addCardsToFaceDown();
      } else if (deckP1.length < 2 && discardP1.length < 1) {
        winner("P2");
      } else {
        winner("P1");
      }
    }, 2000);
  }

  render() {
    const {
      deckP1,
      deckP2,
      cardUpP1,
      cardUpP2,
      discardP1,
      discardP2,
      winner,
      finalWinner,
    } = this.props;
    const p1 = deckP1.length === 0 && cardUpP1 === "" && discardP1.length === 0;
    const p2 = deckP2.length === 0 && cardUpP2 === "" && discardP2.length === 0;
    if (p1 || p2 || finalWinner !== "") {
      clearInterval(this.timerId); //won't be able to show the last round winner as it will render this
      if (p2) {
        //final winner is p2
        //can't set winner in global state while other stuff rendering, will just set up API call directly here
        // winner("P1");
      } else {
        //final winner is p1
        // winner("P2");
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
