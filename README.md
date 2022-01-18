# WarGame

## How to Play Instructions

The game is LIVE on heroku! You can simply go to <a href="https://war-game-emily.herokuapp.com/" target="_blank">HERE</a>, then click the button ‘Play’ and two simulated players will start playing.

If you wish to see what the development mode looks like, you can follow the steps:

1. clone this repo
2. run `npm install` at the root directory to set up your backend environment
3. run `psql -f ./config/db/schema.sql`at the root directory to set up the database at your local postgresql db
4. run `npm install` at the frontend directory set up your frontend environment
5. run `npm run dev` to run the app, you shall see it running on localhost: 3000
6. you can test the game with the 6 test cases I came up with. Find the file "players_reducer" and comment out line 15 and comment in line 16. Feel free to switch between test cases at the file <a href="https://github.com/em0227/WarGame/blob/main/frontend/src/reducers/test_case.js" target="_blank">"test_case"</a>.

---

## Test Examples

1. Both players run out of cards in the deck and need to **move cards in the won pile** to the deck.
2. When there’s a **WAR**.
3. **Multiwar**.
4. **War** ends and both need to **move won piles to deck** to continue the game.
5. **One player** has an empty deck **during war** and needs to move its won pile to deck to continue the war.
6. When **one player** has **fewer cards left**.
7. Fewer cards to start when going into war.

---

## Stack

PERN (Postgresql, Express, React, Node.js)

---

## Trade-offs

The game logic lives on the frontend. This may not be ideal but I design it so to reduce API calls to speed up the game play and development process.

1. If the game somehow is interrupted in the middle (due to network outage or other causes), the game progress will be lost.
2. If I want to save the game progress, the cards order in the deck will matter as it will affect how many API calls I will have to make. Currently the app is not keeping track of the order, but if it keeps track of the order, the number of API calls needed may be reduced.

---

## Future Improvements

1. Add backend endpoint authorization so users can't mischievously increase their wins.
2. Make the cards look nice with actual poker images.
3. Users can choose different test cases directly from the UI.
4. redux-saga may help to manage state updating asynchronously

---

## Major Obstacles

1. Setting up a postgresql database on Heroku and had a 503 (Service Unavailable) error. I was having issues with SSL and needed to add an env variable ‘PGSSLMODE=no-verify’ to allow API calls to update players’ lifetime wins.

2. I found out using React for building this game may not be ideal. As the game structure is simple, it can not fully utilize the power of React. And the auto re-rendering is adding extra difficulty for organizing the code because I am using setIntervals/setTimeout to simulate the plays.
