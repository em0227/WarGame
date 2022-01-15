export const ADD_CARDS_TO_FACEDOWN = "ADD_CARDS_TO_FACEDOWN";
export const DRAW_CARD = "DRAW_CARD";
export const WAR_DRAW = "WAR_DRAW";

export const addCardsToFaceDown = (cards) => ({
  type: ADD_CARDS_TO_FACEDOWN,
  cards,
});

export const drawCard = (card) => ({
  type: DRAW_CARD,
  card,
});
