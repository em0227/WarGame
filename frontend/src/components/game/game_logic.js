import { warDraw } from "../../actions/cards_actions";

export const whoWins = (player1, player2) => {
  const num1 = parseInt(player1.split(" ")[0]);
  const num2 = parseInt(player2.split(" ")[0]);

  if (num1 === num2) {
    return "war";
    // war();
  } else if (num1 > num2) {
    return "p1";
  } else {
    return "p2";
  }
};

export const war = () => {};
