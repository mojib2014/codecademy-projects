require("dotenv").config();

const { CONNECTION_STRING } = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: CONNECTION_STRING,
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
    debug: true,
  },
};
