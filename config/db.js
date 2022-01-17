const { Client } = require("pg");

const db = new Client({
  connectionString: process.env.DATABASE_URL,
});

db.connect();

db.query(
  "SELECT table_schema,table_name FROM information_schema.tables;",
  (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    db.end();
  }
);

module.exports = db;
