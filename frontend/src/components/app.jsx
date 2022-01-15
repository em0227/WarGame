import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Player from "./players/player";
import { drawCard } from "../actions/cards_actions";

const App = (props) => {
  const player1 = useSelector((state) => state.players.p1);
  const player2 = useSelector((state) => state.players.p2);
  console.log(player1);
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
      <Player playerObj={player1} />
      <Player playerObj={player2} />
      <button onClick={draw}>Play</button>
    </div>
  );
};

export default App;
