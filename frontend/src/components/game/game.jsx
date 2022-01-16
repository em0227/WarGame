import React from "react";
import * as GameLogic from "./game_logic";
import { useSelector, useDispatch } from "react-redux";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { cardUpP1, cardUpP2, addCardToDiscard, drawCard } = this.props;
      const result = GameLogic.whoWins(cardUpP1, cardUpP2);
      let cards;
      if (result === "p2") {
        cards = [cardUpP1, cardUpP2];
      } else {
        cards = [cardUpP2, cardUpP1];
      }
      addCardToDiscard(cards, result);
    }
  }

  render() {
    if (this.props.cardUpP1.length === 0) return null;
    return <div></div>;
  }
}

export default Game;
