import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Player from "./players/player";
import { startGame } from "../reducers/selector";

const App = (props) => {
  const dispatch = useDispatch();

  const start = () => {
    const cards = startGame();
    const deckOne = cards[0];
    const deckTwo = cards[1];
    dispatch({ type: "START_GAME_P1", deck: deckOne });
    dispatch({ type: "START_GAME_P2", deck: deckTwo });
  };

  const player1 = useSelector((state) => state.player1);
  const player2 = useSelector((state) => state.player2);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Player playerObj={player1} />
      <Player playerObj={player2} />
      <button onClick={start}>Play</button>
    </div>
  );
};

export default App;
