export const ADD_CARDS_TO_FACEDOWN = "ADD_CARDS_TO_FACEDOWN";
export const DRAW_CARD = "DRAW_CARD";
export const WAR_DRAW = "WAR_DRAW";

export const addCardsToFaceDown = (cards, id) => ({
  type: ADD_CARDS_TO_FACEDOWN,
  cards,
  id,
});

export const drawCard = () => ({
  type: DRAW_CARD,
});
