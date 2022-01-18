// smaller test cases //can't stop the last move pile to deck after there's winner & last scence will go too fast to be seen
// 1. MOVE PILE TO DECK
export const deckOne = ["13 club", "14 spade", "9 heart"];
export const deckTwo = ["11 spade", "12 heart", "10 spade"];
// 2. WAR
// export const deckOne = ["14 heart", "13 club", "14 spade", "9 heart"];
// export const deckTwo = ["10 spade", "11 spade", "12 heart", "9 diamond"];
// 3. MULTIWAR
// export const deckOne = ["14 heart", "13 club", "9 heart", "14 spade", "10 club"];
// export const deckTwo = ["10 spade", "11 spade", "9 diamond", "12 heart", "10 heart"];
// 4. WAR ENDS && BOTH PLAYERS DECK EMPTY && PILE has more
// export const deckOne = [
//   "14 heart",
//   "13 club",
//   "9 heart",
//   "14 spade",
//   "10 club",
//   "13 club",
//   "14 spade",
//   "9 heart",
// ];
// export const deckTwo = [
//   "10 spade",
//   "11 spade",
//   "9 diamond",
//   "12 heart",
//   "10 heart",
//   "11 spade",
//   "12 heart",
//   "10 spade",
// ];
// 5. DURING WAR && DECK has 1 card left && PILE has more
// export const deckOne = [
//   "13 club",
//   "9 heart",
//   "14 spade",
//   "10 club",
//   "13 club",
//   "9 heart",
// ];
// export const deckTwo = [
//   "11 spade",
//   "9 diamond",
//   "12 heart",
//   "10 heart",
//   "11 spade",
//   "10 spade",
// ];

//6. P2 DOESN'T HAVE ENOUGH CARD
// export const deckOne = [
//   "11 spade",
//   "13 club",
//   "9 heart",
//   "14 spade",
//   "10 club",
//   "13 club",
// ];
// export const deckTwo = ["2 club", "9 diamond", "12 heart", "10 heart", "11 spade"];

//7. WAR, Move pile to deck during Add cards to facedown (causing wether war ends or not end)

// export const deckOne = ["9 spade", "13 heart", "14 heart"];
// export const deckTwo = ["9 club", "11 diamond", "11 diamond"];
//OR
// export const deckOne = ["9 spade", "13 heart"];
// export const deckTwo = ["9 club", "11 diamond"];
