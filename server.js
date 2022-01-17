require("dotenv").config(); // SUPPORT .ENV FILES
const express = require("express"); // BRING IN EXPRESS
const app = express(); // INITILIZE APP
const path = require("path");
const bodyParser = require("body-parser");
const pg = require("pg");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const players = require("./routes/api/players");
const games = require("./routes/api/games");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    store: new pgSession({
      conString: process.env.DATABASE_URL,
    }),
    key: "user_sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 10 * 10 * 6000000 },
  })
);

// app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/players", players);
app.use("/api/games", games);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
