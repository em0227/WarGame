import {
  ADD_CARDS_TO_FACEDOWN,
  DRAW_CARD,
  CLEAR_CARD,
} from "../actions/cards_actions";

import {
  ADD_CARDS_TO_DISCARD,
  MOVE_PILE_TO_DECK,
} from "../actions/discard_pile_actions";
import { startGame } from "../reducers/selector";

const cards = startGame();
const deckOne = cards[0];
const deckTwo = cards[1];
// smaller test cases
// move pile to deck
// const deckOne = ["13 club", "14 spade", "9 heart"];
// const deckTwo = ["11 spade", "12 heart", "10 spade"];
// war
// const deckOne = ["14 heart", "13 club", "14 spade", "9 heart"];
// const deckTwo = ["10 spade", "11 spade", "12 heart", "9 diamond"];
// multiwar
// const deckOne = ["14 heart", "13 club", "9 heart", "14 spade", "10 club"];
// const deckTwo = ["10 spade", "11 spade", "9 diamond", "12 heart", "10 heart"];
// war and deck has less than 1 card but there's pile
// const deckOne = [
//   "14 heart",
//   "13 club",
//   "9 heart",
//   "14 spade",
//   "10 club",
//   "13 club",
//   "14 spade",
//   "9 heart",
// ];
// const deckTwo = [
//   "10 spade",
//   "11 spade",
//   "9 diamond",
//   "12 heart",
//   "10 heart",
//   "11 spade",
//   "12 heart",
//   "10 spade",
// ];
// war ends with two players ran out of cards at the same time
// const deckOne = [
//   "13 club",
//   "9 heart",
//   "14 spade",
//   "10 club",
//   "13 club",
//   "14 spade",
//   "9 heart",
// ];
// const deckTwo = [
//   "11 spade",
//   "9 diamond",
//   "12 heart",
//   "10 heart",
//   "11 spade",
//   "12 heart",
//   "10 spade",
// ];

const _default_state = {
  p1: {
    cardFaceUp: "",
    cardFaceDown: [],
    discardPile: [],
    deck: deckOne,
    lifetimeWins: 0,
    id: "p1",
  },
  p2: {
    cardFaceUp: "",
    cardFaceDown: [],
    discardPile: [],
    deck: deckTwo,
    lifetimeWins: 0,
    id: "p2",
  },
};

export default (state = _default_state, action) => {
  Object.freeze(state);
  let newState = JSON.parse(JSON.stringify(state));
  //used Object.assign but didn't work
  switch (action.type) {
    case DRAW_CARD:
      const p1_card = newState.p1.deck.pop();
      const p2_card = newState.p2.deck.pop();
      newState.p1.cardFaceUp = p1_card;
      newState.p2.cardFaceUp = p2_card;
      // debugger;
      return newState;
    case ADD_CARDS_TO_FACEDOWN:
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
      //if come from war, need to also add face down cards to the winner's discard piles
      //otherwise, just add the face up cards to the winner's discard piles
      const originalCards = newState[action.playerId].discardPile;
      if (newState.p1.cardFaceDown.length > 0) {
        originalCards.push(...newState.p1.cardFaceDown);
        originalCards.push(...newState.p2.cardFaceDown);
      }
      newState.p1.cardFaceDown = [];
      newState.p2.cardFaceDown = [];
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
