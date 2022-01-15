import React from "react";
import Deck from "./decks/deck";
import { startGame } from "../reducers/selector";

const App = (props) => {
  const decks = startGame();
  const deckOne = decks[0];
  const deckTwo = decks[1];
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Deck deck={deckOne} />
      <Deck deck={deckTwo} />
    </div>
  );
};

export default App;
