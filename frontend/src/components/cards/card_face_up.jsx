import React from "react";

const CardFaceUp = ({ card: cardFaceUp }) => {
  const style = cardFaceUp !== "" ? { backgroundColor: "white" } : {};

  return (
    <div className="face-up" style={style}>
      <p>{cardFaceUp}</p>
    </div>
  );
};

export default CardFaceUp;
