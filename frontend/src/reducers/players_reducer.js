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
// const deckOne = cards[0];
// const deckTwo = cards[1];
const deckOne = ["13 club", "14 spade", "9 heart"];
const deckTwo = ["11 spade", "12 heart", "10 spade"];
// const deckOne = ["14 heart", "13 club", "14 spade", "9 heart"];
// const deckTwo = ["10 spade", "11 spade", "12 heart", "9 diamond"];

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
  //used Object.assign but didn't work
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
      //add current cardFaceUp to cardFaceDown
      //draw 2 cards from deck, one add to cardFaceDown and one add to cardFaceUp
      const currentUpP1 = newState.p1.cardFaceUp;
      const currentUpP2 = newState.p2.cardFaceUp;
      newState.p1.cardFaceDown.push(currentUpP1);
      newState.p2.cardFaceDown.push(currentUpP2);
      const newCardDownP1 = newState.p1.deck.pop();
      const newCardDownP2 = newState.p2.deck.pop();
      newState.p1.cardFaceDown.push(newCardDownP1);
      newState.p2.cardFaceDown.push(newCardDownP2);
      const newCardUpP1 = newState.p1.deck.pop();
      const newCardUpP2 = newState.p2.deck.pop();
      newState.p1.cardFaceUp = newCardUpP1;
      newState.p2.cardFaceUp = newCardUpP2;

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
