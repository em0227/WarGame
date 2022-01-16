import {
  ADD_CARDS_TO_FACEDOWN,
  DRAW_CARD,
  CLEAR_CARD,
  WAR_DRAW,
} from "../actions/cards_actions";

import {
  ADD_CARDS_TO_DISCARD,
  MOVE_PILE_TO_DECK,
} from "../actions/discard_pile_actions";
import { startGame } from "../reducers/selector";

const cards = startGame();
const deckOne = cards[0];
const deckTwo = cards[1];
// const deckOne = ["9 heart", "13 club", "14 spade"];
// const deckTwo = ["10 spade", "11 spade", "12 heart"];

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
  // console.log(state);
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case DRAW_CARD:
      const length1 = newState.p1.deck.length;
      const length2 = newState.p2.deck.length;
      const p1_card = newState.p1.deck.at(-1);
      const p2_card = newState.p2.deck.at(-1);
      newState.p1.cardFaceUp = p1_card;
      newState.p2.cardFaceUp = p2_card;
      newState.p1.deck = newState.p1.deck.slice(0, length1 - 1);
      newState.p2.deck = newState.p2.deck.slice(0, length2 - 1);
      // debugger;
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
    case MOVE_PILE_TO_DECK:
      const pile = newState[action.playerId].discardPile;
      newState[action.playerId].deck = pile;
      newState[action.playerId].discardPile = [];
      return newState;
    default:
      return state;
  }
};
