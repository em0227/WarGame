const express = require("express");
const router = express.Router();
const db = require("../../config/config");

router.get("/test", (req, res) => {
  res.json("this is the games test route");
});

router.post("/", (req, res) => {
  // console.log(req.body);
  const { status } = req.body;
  return db
    .one(
      `INSERT into games(status) VALUES($1) RETURNING id, status`,
      [status],
      (a) => [a.id, a.status]
    )
    .then((data) => {
      const result = {};
      result.id = parseInt(data[0]);
      result.status = data[1];
      res.json(result).status(200);
    })
    .catch((err) => res.json({ err }).status(400));
});

router.patch("/", (req, res) => {
  // console.log(req.body);
  const { status, gameID } = req.body;

  db.none(`UPDATE games SET status = $1 WHERE id = $2`, [status, gameID])
    .then(() => {
      res.status(200);
    })
    .catch((err) => res.json({ err }).status(400));
});

module.exports = router;
