import React from "react";

const CardFaceDown = ({card: cardFaceDown}) => {

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
