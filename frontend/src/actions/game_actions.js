import * as GameAPIUtil from "../util/game_api_util";

export const START_GAME = "START_GAME";
export const START_GAME_ERR = "START_GAME_ERR";

export const startGame = (id) => ({
  type: START_GAME,
  id,
});

export const startGameErr = (error) => ({
  type: START_GAME_ERR,
  error,
});

export const createGame = () => (dispatch) =>
  GameAPIUtil.startGame().then(
    (data) => dispatch(startGame(data.data.id)),
    (err) => dispatch(startGameErr(err.response.data))
  );
