import {
  ADD_CARDS_TO_FACEDOWN,
  DRAW_CARD,
  WAR_DRAW,
} from "../actions/cards_actions";

export const cardFaceUp = function (state = "", action) {
  switch (action.type) {
    case DRAW_CARD:
      return action.card;
    case WAR_DRAW:
      return;
    default:
      return state;
  }
};

export const cardFaceDown = function (state = [], action) {
  switch (action.type) {
    case ADD_CARDS_TO_FACEDOWN:
      return state.concat(action.cards);
    case WAR_DRAW:
      return;
    default:
      return state;
  }
};
