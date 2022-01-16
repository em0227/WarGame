import { combineReducers } from "redux";
import players from "./players_reducer";
// import warReducer from "./war_reducer";

export default combineReducers({
  players,
  // war: warReducer,
});
