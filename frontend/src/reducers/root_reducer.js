import { combineReducers } from "redux";
import players from "./players_reducer";
import winner from "./winner_reducer";
import error from "./error_reducer";
import game from "./game_reducer";

export default combineReducers({
  game,
  players,
  winner,
  error,
});
