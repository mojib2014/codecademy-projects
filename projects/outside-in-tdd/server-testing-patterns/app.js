const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");

const index = require("./routes/index");
const profile = require("./routes/profile");
const messages = require("./routes/messages");

const app = express();

// View engine setup
app.engine("handlebars", expressHandlebars({ defaultLayout: "app" }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/profile", profile);
app.use("/messages", messages);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
