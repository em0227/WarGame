import { START_GAME } from "../actions/game_actions";
const _default_state = 0;

export default (state = _default_state, action) => {
  switch (action.type) {
    case START_GAME:
      return action.id;
    default:
      return state;
  }
};
