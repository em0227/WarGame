import { combineReducers } from "redux";
import player1Reducer from "./player1_reducer";
import player2Reducer from "./player2_reducer";
// import warReducer from "./war_reducer";

export default combineReducers({
  player1: player1Reducer,
  player2: player2Reducer,
  // war: warReducer,
});
