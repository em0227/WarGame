const db = require("../config/config");

const Player = {};

Player.create = (player, lifetimeWins) => {
  return db.none(
    `INSERT into players(username, lifetime_wins)` + `VALUES($1, $2)`,
    [player, lifetimeWins]
  );
};

Player.get = () => {
  return db.any(`SELECT * FROM players`);
};

Player.update = (player, lifetimeWins, playerID) => {
  return db.none(
    `UPDATE players SET username = $1, lifetime_wins = $2, WHERE id = $3`,
    [player, lifetimeWins, playerID]
  );
};

module.exports = Player;
