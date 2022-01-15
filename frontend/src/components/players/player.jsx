import React from "react";
import { useEffect } from "react";
import Deck from "../decks/deck";

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Deck {...this.props} />
      </div>
    );
  }
}

export default Player;
