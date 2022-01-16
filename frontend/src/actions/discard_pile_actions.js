export const ADD_CARDS_TO_DISCARD = "ADD_CARDS_TO_DISCARD";
export const MOVE_PILE_TO_DECK = "MOVE_PILE_TO_DECK";

export const addCardToDiscard = (cards, playerId) => ({
  type: ADD_CARDS_TO_DISCARD,
  cards,
  playerId,
});

export const movePileToDeck = (playerId) => ({
  type: MOVE_PILE_TO_DECK,
  playerId,
});
