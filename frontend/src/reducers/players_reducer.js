import {
  ADD_CARDS_TO_FACEDOWN,
  DRAW_CARD,
  CLEAR_CARD,
  WAR_DRAW,
} from "../actions/cards_actions";

import { ADD_CARDS_TO_DISCARD } from "../actions/discard_pile_actions";
import { startGame } from "../reducers/selector";

const cards = startGame();
const deckOne = cards[0];
const deckTwo = cards[1];

const _default_state = {
  p1: {
    cardFaceUp: "",
    cardFaceDown: [],
    discardPile: [],
    deck: deckOne,
    id: "p1",
  },
  p2: {
    cardFaceUp: "",
    cardFaceDown: [],
    discardPile: [],
    deck: deckTwo,
    id: "p2",
  },
};

export default (state = _default_state, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case DRAW_CARD:
      const p1_card = newState.p1.deck.pop();
      const p2_card = newState.p2.deck.pop();
      newState.p1.cardFaceUp = p1_card;
      newState.p2.cardFaceUp = p2_card;
      return newState;
    case ADD_CARDS_TO_FACEDOWN: //may not work, and haven't update player 2
      return newState;
    case CLEAR_CARD:
      newState.p1.cardFaceUp = "";
      newState.p2.cardFaceUp = "";
      return newState;
    case ADD_CARDS_TO_DISCARD:
      const originalCards = newState[action.playerId].discardPile;
      newState[action.playerId].discardPile = originalCards.concat(
        action.cards
      );
      return newState;
    default:
      return state;
  }
};
