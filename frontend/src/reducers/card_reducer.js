import { ADD_CARDS } from "../actions/cards_actions";

const _default_state = {
  cardFaceDown: [],
};

export default (state = _default_state, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_CARDS:
      return newState.cardFaceDown.concat(action.cards);
    default:
      return state;
  }
};
