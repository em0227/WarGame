import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const lifetimeWinsP1 = useSelector((state) => state.players.p1.lifetimeWins);
  const lifetimeWinsP2 = useSelector((state) => state.players.p2.lifetimeWins);
  return (
    <div className="header">
      <p>Player 1 Lifetime Wins: {lifetimeWinsP1}</p>
      <p>CARD GAME: WAR</p>
      <p>Player 2 Lifetime Wins: {lifetimeWinsP2}</p>
    </div>
  );
};

export default Header;
