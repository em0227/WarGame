import React from "react";
import { useSelector } from "react-redux";

const DiscardPile = (props) => {
  const discardPile = useSelector(
    (state) => state.players[props.playerId].discardPile
  );
  if (discardPile.length === 0) return null;
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "150px",
        height: "100px",
      }}
    >
      <p>Won Cards</p>
      <p>{`Last won with: ${discardPile[discardPile.length - 1]}`}</p>
    </div>
  );
};

export default DiscardPile;
