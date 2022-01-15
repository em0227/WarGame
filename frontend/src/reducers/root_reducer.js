import { combineReducers } from "redux";
import players from "./players_reducer";
import game from "./game_reducer";
// import player2Reducer from "./player2_reducer";
// import warReducer from "./war_reducer";

export default combineReducers({
  players,
  // war: warReducer,
  game,
});
