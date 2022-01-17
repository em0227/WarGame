import React from "react";

const CardFaceUp = ({ card: cardFaceUp }) => {
  if (cardFaceUp === "") {
    return null;
  } else {
    return (
      <div
        style={{
          backgroundColor: "white",
          width: "150px",
          height: "100px",
        }}
      >
        {cardFaceUp}
      </div>
    );
  }
};

export default CardFaceUp;
