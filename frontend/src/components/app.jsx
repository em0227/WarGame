import React from "react";
import { useDispatch } from "react-redux";
import PlayerContainer from "./players/player_container";
import { drawCard } from "../actions/cards_actions";

const App = (props) => {
  const dispatch = useDispatch();

  const draw = () => {
    //poping out from the deck
    //update global state of deck, cardFaceUp
    // if (deck.length !== 0) {
    //   setTimeout(() => {
    //     dispatch(drawCard());
    //   }, 3000);
    // }
    dispatch(drawCard());
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <PlayerContainer playerId="p1" />
      <PlayerContainer playerId="p2" />
      <button onClick={draw}>Play</button>
    </div>
  );
};

export default App;
