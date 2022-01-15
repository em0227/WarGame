import React from "react";
import { useDispatch } from "react-redux";

export const CardFaceUp = (props) => {
  const cardFaceUp = props.card;

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
