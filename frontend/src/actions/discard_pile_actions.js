export const ADD_CARDS_TO_DISCARD = "ADD_CARDS_TO_DISCARD";

export const addCardToDiscard = (cards, playerId) => ({
  type: ADD_CARDS_TO_DISCARD,
  cards,
  playerId,
});
