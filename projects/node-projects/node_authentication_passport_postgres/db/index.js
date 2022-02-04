const winston = require("winston");
const { Pool } = require("pg");
const config = require("../config");

const dbConfig = {
  user: "mojib2014",
  password: "5432",
  database: "node_passport_auth",
  host: "lcoalhost",
  port: "5432",
  max: "",
  idleTimeoutMillis: "",
};

const pool = new Pool(dbConfig);

pool.on("error", (err) => {
  winston.error("idle client error", err.message, err.stack);
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
