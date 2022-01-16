import { combineReducers } from "redux";
import players from "./players_reducer";
import winner from "./winner_reducer";

export default combineReducers({
  players,
  winner,
});
