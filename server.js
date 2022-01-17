require("dotenv").config(); // SUPPORT .ENV FILES
const express = require("express"); // BRING IN EXPRESS
const app = express(); // INITILIZE APP
const path = require("path");
const bodyParser = require("body-parser");
const players = require("./routes/api/players");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/players", players);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
