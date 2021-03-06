// PROMISE LIBRARY
const promise = require("bluebird");

// OVERRIDING DEFAULT PROMISE LIBRARY
const options = {
  promiseLib: promise,
  query: (e) => {
    console.log(e.query);
  },
  // rejectUnauthorized: false,
};
const pgp = require("pg-promise")(options);

// SET UP THE CONNECTION STRING FOR THE DATABASE
const connectionString = process.env.DATABASE_URL;
const db = pgp(connectionString);

module.exports = db;
