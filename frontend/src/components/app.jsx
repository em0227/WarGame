import React from "react";
import GameContainer from "./game/game_container";
import Header from "./header/header";
import Description from "./description/description";

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <Description />
      <GameContainer />
    </div>
  );
};

export default App;
