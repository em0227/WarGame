const express = require("express");
const router = express.Router();
const db = require("../../config/config");

router.get("/test", (req, res) => {
  res.json("this is the games test route");
});

router.post("/", (req, res) => {
  const status = "start";
  return db
    .one(
      `INSERT into games(status) VALUES($1) RETURNING id`,
      [status],
      (a) => a.id
    )
    .then((data) => {
      const result = {};
      result.id = parseInt(data);
      res.json(result).status(200);
    })
    .catch((err) => {
      res.json({ err }).status(400);
    });
});

router.patch("/", (req, res) => {
  const status = "finished";
  const { gameID } = req.body;

  db.none(`UPDATE games SET status = $1 WHERE id = $2`, [status, gameID])
    .then(() => {
      res.json({ success: true }).status(200);
    })
    .catch((err) => {
      res.json({ err }).status(400);
    });
});

module.exports = router;
