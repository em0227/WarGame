import { RECEIVE_PLAYER_DATA_ERR } from "../actions/player_actions";

const _default_state = "";

export default (state = _default_state, action) => {
  switch (action.type) {
    case RECEIVE_PLAYER_DATA_ERR:
      return action.data;
    default:
      return state;
  }
};
