import React from "react";

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.deck = props.deck;
  }

  draw() {
    //poping out from the deck
    //also updating the state of cardsOnTable
  }

  isEmpty() {}

  render() {
    return (
      <div
        style={{
          backgroundColor: "darkGreen",
          width: "100px",
          height: "150px",
          margin: "300px",
        }}
      ></div>
    );
  }
}

export default Deck;
