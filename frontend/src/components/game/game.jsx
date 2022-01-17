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

  componentDidMount() {
    this.props.fetchPlayerData();
  }

  componentDidUpdate(prevProps) {
    const { cardUpP1, cardUpP2 } = this.props;

    const afterDraw =
      cardUpP1 !== "" &&
      cardUpP2 !== "" &&
      prevProps.cardUpP1 !== this.props.cardUpP1;

    if (afterDraw) {
      setTimeout(() => {
        this.round();
      }, 1000);
    }
  }

  draw() {
    const { drawCard } = this.props;
    this.timerId = setInterval(() => {
      this.setState({ winner: "", status: "" });
      drawCard();
    }, 2000);

    // drawCard();
  }

  warDraw() {
    const {
      winner,
      deckP1,
      deckP2,
      addCardsToFaceDown,
      discardP1,
      discardP2,
      movePileToDeck,
    } = this.props;

    const safeToProceed = deckP1.length >= 2 && deckP2.length >= 2;

    const bothDeckEmpty =
      deckP1.length < 2 &&
      discardP1.length > 0 &&
      deckP2.length < 2 &&
      discardP2.length > 0;

    const p1DeckEmpty = deckP1.length < 2 && discardP1.length > 0;
    const p2DeckEmpty = deckP2.length < 2 && discardP2.length > 0;
    const p2Wins = deckP1.length < 2 && discardP1.length < 1;

    this.timerId = setInterval(() => {
      if (safeToProceed) {
        addCardsToFaceDown();
      } else if (bothDeckEmpty) {
        movePileToDeck("p1");
        movePileToDeck("p2");
        addCardsToFaceDown();
      } else if (p1DeckEmpty) {
        movePileToDeck("p1");
        addCardsToFaceDown();
      } else if (p2DeckEmpty) {
        movePileToDeck("p2");
        addCardsToFaceDown();
      } else if (p2Wins) {
        winner("P2");
      } else {
        winner("P1");
      }
    }, 2000);
  }

  stopWar() {
    if (this.state.status === "WAR!!!") {
      clearInterval(this.timerId);
      this.setState({ status: "" });
      this.draw();
    }
  }

  round() {
    const {
      cardUpP1,
      cardUpP2,
      addCardToDiscard,
      clearCard,
      deckP1,
      deckP2,
      movePileToDeck,
    } = this.props;

    const result = GameLogic.whoWins(cardUpP1, cardUpP2);
    let cards;

    if (result === "war") {
      this.setState({ status: "WAR!!!" });
      this.warDraw();
      return;
    }

    if (result === "p2") {
      this.stopWar();
      this.setState({ winner: "WINNER: P2" });
      cards = [cardUpP1, cardUpP2];
    } else {
      this.stopWar();
      this.setState({ winner: "WINNER: P1" });
      cards = [cardUpP2, cardUpP1];
    }

    addCardToDiscard(cards, result);
    clearCard();

    if (deckP1.length === 0) {
      this.setState({ status: "Move P1 Pile to Deck" });
      movePileToDeck("p1");
    }
    if (deckP2.length === 0) {
      this.setState({ status: "Move P2 Pile to Deck" });
      movePileToDeck("p2");
    }
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
      lifetimeWinsP1,
      lifetimeWinsP2,
      updatePlayerData,
    } = this.props;
    const p2Wins =
      deckP1.length === 0 && cardUpP1 === "" && discardP1.length === 0;
    const p1Wins =
      deckP2.length === 0 && cardUpP2 === "" && discardP2.length === 0;
    if (p1Wins || p2Wins || finalWinner !== "") {
      clearInterval(this.timerId); //won't be able to show the last round winner as it will render this
      if (p2Wins) {
        //final winner is p2
        //can't set winner in global state while other stuff rendering, will just set up API call directly here
        // winner("P1");
        // updatePlayerData({ playerID: 1 });
      } else {
        //final winner is p1
        // winner("P2");
        // updatePlayerData({ playerID: 2 });
      }
      return (
        <div>
          <p>Player 1 Lifetime Wins: {lifetimeWinsP1}</p>
          <p>Player 2 Lifetime Wins: {lifetimeWinsP2}</p>
          <p style={{ color: "red" }}>Game Over!</p>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Player 1 Lifetime Wins: {lifetimeWinsP1}</p>
          <p>Player 2 Lifetime Wins: {lifetimeWinsP2}</p>
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
