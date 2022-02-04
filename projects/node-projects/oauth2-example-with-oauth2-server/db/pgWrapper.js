const { Pool } = require("pg");

function query(queryString, cbFunc) {
  const pool = new Pool({
    user: "mojib2014",
    host: "localhost",
    database: "oauth2_example",
    password: "5432",
    posrt: "5432",
  });

  pool.query(queryString, (error, results) => {
    cbFunc(setResponse(error, results));
  });
}

function setResponse(error, results) {
  return {
    error: error,
    results: results ? results : null,
  };
}

module.exports = {
  query,
};
