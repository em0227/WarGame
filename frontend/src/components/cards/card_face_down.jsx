import React from "react";

const CardFaceDown = ({ card: cardFaceDown }) => {
  const style =
    cardFaceDown.length !== 0 ? { backgroundColor: "darkGreen" } : {};
  const content =
    cardFaceDown.length !== 0 ? `${cardFaceDown.length} cards` : "";

  return (
    <div className="face-down" style={style}>
      {content}
    </div>
  );
};

export default CardFaceDown;
