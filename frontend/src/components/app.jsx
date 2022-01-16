import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PlayerContainer from "./players/player_container";
import GameContainer from "./game/game_container";
import { drawCard } from "../actions/cards_actions";
import { addCardToDiscard } from "../actions/discard_pile_actions";
import * as GameLogic from "./game/game_logic";

const App = (props) => {
  return <GameContainer />;
};

export default App;
