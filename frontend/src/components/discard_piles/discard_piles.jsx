import React from "react";
import { useSelector } from "react-redux";

const DiscardPile = (props) => {
  const discardPile = useSelector(
    (state) => state.players[props.playerId].discardPile
  );
  const style = discardPile.length !== 0 ? { backgroundColor: "white" } : {};
  const content =
    discardPile.length !== 0 ? (
      <div>
        <p>Won Cards</p>
        <p>Last won with:</p>
        <p>{discardPile[discardPile.length - 1]}</p>
      </div>
    ) : (
      ""
    );

  return (
    <div className="discard" style={style}>
      {content}
    </div>
  );
};

export default DiscardPile;
