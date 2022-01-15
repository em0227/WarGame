import { combineReducers } from "redux";
import cardReducer from "./card_reducer";
import player1Reducer from "./player1_reducer";
import player2Reducer from "./player2_reducer";
import warReducer from "./war_reducer";

export default combineReducers({
  cardFaceDown: cardReducer,
  // player1DiscardPile: player1Reducer,
  // player2DiscardPile: player2Reducer,
  // war: warReducer,
});
