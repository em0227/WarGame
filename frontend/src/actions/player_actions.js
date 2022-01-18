import * as PlayerAPIUtil from "../util/player_api_util";

export const RECEIVE_PLAYER_DATA = "RECEIVE_PLAYER_DATA";
export const RECEIVE_PLAYER_DATA_ERR = "RECEIVE_PLAYER_DATA_ERR";
export const RESTART = "RESTART";

export const receivePlayerData = (data) => ({
  type: RECEIVE_PLAYER_DATA,
  data,
});

export const receivePlayerDataErr = (error) => ({
  type: RECEIVE_PLAYER_DATA_ERR,
  error,
});

export const restart = () => ({
  type: RESTART,
});

export const fetchPlayerData = () => (dispatch) =>
  PlayerAPIUtil.getLifetimeWins().then(
    (data) => dispatch(receivePlayerData(data.data)),
    (err) => dispatch(receivePlayerDataErr(err.response.data))
  );

export const updatePlayerData = (playerID) => (dispatch) =>
  PlayerAPIUtil.updateLifetimeWins(playerID).then(
    (data) => dispatch(receivePlayerData(data.data)),
    (err) => dispatch(receivePlayerDataErr(err.response.data))
  );
