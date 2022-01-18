import React from "react";

const Description = () => {
  return (
    <div className="description">
      <p id="title">THE DEAL</p>
      <p>
        The deck is divided evenly, with each player receiving 26 cards, face
        down.
      </p>
      <p id="title">THE PLAY</p>
      <p>
        Each player turns up a card at the same time and the player with the
        higher card takes both cards and puts them, face down, on another pile
        next to their deck.
      </p>
      <p>
        If the cards are the same rank, it is <b>War</b>.
      </p>
      <p>
        Each player turns up one card face down and one card face up. The player
        with the higher cards takes both piles (six cards). If the turned-up
        cards are again the same rank, each player places another card face down
        and turns another card face up. The player with the higher card takes
        all 10 cards, and so on. Game ends until one player gets all 52 cards.
      </p>
    </div>
  );
};

export default Description;
