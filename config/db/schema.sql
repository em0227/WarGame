
DROP DATABASE IF EXISTS war_game;
CREATE DATABASE war_game;

\c war_game;

CREATE TABLE IF NOT EXISTS players(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    username TEXT NOT NULL,
    lifetime_wins INTEGER NOT NULL
);

INSERT into players(username, lifetime_wins) VALUES('Player 1', 0);
INSERT into players(username, lifetime_wins) VALUES('Player 2', 0);
