const express = require("express");
const passport = require("passport");
const winston = require("winston");
const db = require("./db");

const port = process.env.PORT || 9000;
const app = express();

require("./config/passport")(passport, db);
require("./config/express")(app, passport, db.pool);
require("./config/routes")(app, passport, db);

const server = app.listen(port, () => {
  if (app.get("env") === "test") return;

  winston.info("Express app started on port " + port);
});

server.on("close", () => {
  winston.info("Closed express server");

  db.pool.end(() => {
    winston.info("Shut down connection pool");
  });
});
