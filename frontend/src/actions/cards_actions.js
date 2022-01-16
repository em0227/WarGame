export const ADD_CARDS_TO_FACEDOWN = "ADD_CARDS_TO_FACEDOWN";
export const DRAW_CARD = "DRAW_CARD";
export const WAR_DRAW = "WAR_DRAW";
export const CLEAR_CARD = "CLEAR_CARD";

export const addCardsToFaceDown = (cards, id) => ({
  type: ADD_CARDS_TO_FACEDOWN,
  cards,
  id,
});

export const drawCard = () => ({
  type: DRAW_CARD,
});

export const clearCard = () => ({
  type: CLEAR_CARD,
});
