import { RECEIVE_PLAYER_DATA_ERR } from "../actions/player_actions";
import { START_GAME_ERR } from "../actions/game_actions";

const _default_state = "";

export default (state = _default_state, action) => {
  switch (action.type) {
    case RECEIVE_PLAYER_DATA_ERR:
      return action.error;
    case START_GAME_ERR:
      return action.error;
    default:
      return state;
  }
};
