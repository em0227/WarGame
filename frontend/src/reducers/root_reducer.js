import { combineReducers } from "redux";
import players from "./players_reducer";
import war from "./war_reducer";
import winner from "./winner_reducer";

export default combineReducers({
  players,
  war,
  winner,
});
