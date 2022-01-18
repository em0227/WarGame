export const startGame = function () {
  const suits = ["spade", "heart", "club", "diamond"];
  const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const cards = [];
  const results = [[], []];
  let cardCount = new Set();

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      cards.push(nums[j] + " " + suits[i]);
    }
  }

  while (cardCount.size < 52) {
    let index = getRandomInt();
    if (cardCount.has(index)) continue;
    cardCount.add(index);
    if (results[0].length <= 25) {
      results[0].push(cards[index]);
    } else {
      results[1].push(cards[index]);
    }
  }

  return results;
};

function getRandomInt() {
  return Math.floor(Math.random() * 52);
}

const cards = startGame();
export const deckOne = cards[0];
export const deckTwo = cards[1];
