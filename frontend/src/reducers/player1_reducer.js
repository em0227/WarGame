import { combineReducers } from "redux";
import { cardFaceUp, cardFaceDown } from "./card_reducer";
import discardPile from "./discard_pile_reducer";

const deck = (state = [], action) => {
  switch (action.type) {
    case "START_GAME_P1":
      return action.deck;
    default:
      return state;
  }
};

export default combineReducers({
  cardFaceUp,
  cardFaceDown,
  discardPile,
  deck,
});
