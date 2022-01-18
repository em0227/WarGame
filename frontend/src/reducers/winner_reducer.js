import { RESTART } from "../actions/player_actions";
const _default_state = "";

export default (state = _default_state, action) => {
  switch (action.type) {
    case "WINNER":
      return action.player;
    case RESTART:
      return _default_state;
    default:
      return state;
  }
};
