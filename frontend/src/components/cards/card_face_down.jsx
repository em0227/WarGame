import React from "react";
import { useSelector } from "react-redux";

const CardFaceDown = (props) => {
  const cardFaceDown = props.card;

  if (cardFaceDown.length === 0) {
    return null;
  } else {
    return (
      <div
        style={{
          backgroundColor: "darkGreen",
          width: "150px",
          height: "100px",
          color: "white",
        }}
      >
        {`${cardFaceDown.length} cards`}
      </div>
    );
  }
};

export default CardFaceDown;
