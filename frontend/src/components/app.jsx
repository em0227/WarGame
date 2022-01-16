import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PlayerContainer from "./players/player_container";
import GameContainer from "./game/game_container";
import { drawCard } from "../actions/cards_actions";

const App = (props) => {
  const dispatch = useDispatch();
  const deck = useSelector((state) => state.players.p1.deck);
  let timerId;

  // console.log(deck.length);

  const draw = () => {
    //poping out from the deck
    //update global state of deck, cardFaceUp

    timerId = setInterval(() => {
      if (deck.length > 0) {
        dispatch(drawCard());
      } else {
        clearInterval(timerId);
        return <div>"Game Over!"</div>;
      }
    }, 1000);

    // dispatch(drawCard());
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <PlayerContainer playerId="p1" />
      <PlayerContainer playerId="p2" />
      <GameContainer />
      <button onClick={draw}>Play</button>
    </div>
  );
};

export default App;
