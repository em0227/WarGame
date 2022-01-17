const express = require("express");
const router = express.Router();
const db = require("../../config/config");

router.get("/test", (req, res) => {
  res.json("this is the players test route");
});

//get
router.get("/", (req, res) => {
  db.any(`SELECT id, lifetime_wins FROM players`)
    .then((data) => {
      let result = {};
      result[data[0].id] = data[0];
      result[data[1].id] = data[1];

      res.json(result).status(200);
    })
    .catch((err) => res.json({ err }).status(400));
});

//update
router.patch("/", (req, res) => {
  // console.log(req.body);
  const { playerID } = req.body;
  let lifetimeWins;
  db.any(`SELECT lifetime_wins FROM players WHERE id = ${playerID}`).then(
    (data) => {
      lifetimeWins = data[0].lifetime_wins;
      lifetimeWins += 1;

      db.none(`UPDATE players SET lifetime_wins = $1 WHERE id = $2`, [
        lifetimeWins,
        playerID,
      ]).then(() => {
        db.any(`SELECT id, lifetime_wins FROM players`)
          .then((data) => {
            let result = {};
            result[data[0].id] = data[0];
            result[data[1].id] = data[1];
            res.json(result).status(200);
          })
          .catch((err) => res.json({ err }).status(400));
      });
    }
  );
});

module.exports = router;
