import React from "react";
import { useDispatch } from "react-redux";

export const CardFaceDown = (props) => {
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
        {`${cardFaceDown} cards`}
      </div>
    );
  }
};
