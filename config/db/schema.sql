
DROP DATABASE IF EXISTS war_game;
CREATE DATABASE war_game;

\c war_game;

DROP TABLE players;

CREATE TABLE IF NOT EXISTS players(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    username TEXT NOT NULL UNIQUE,
    lifetime_wins INTEGER NOT NULL
);

INSERT into players(username, lifetime_wins) VALUES('Player 1', 0);
INSERT into players(username, lifetime_wins) VALUES('Player 2', 0);

DROP TABLE games;

CREATE TABLE IF NOT EXISTS games(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    status TEXT NOT NULL
);