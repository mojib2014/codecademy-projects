const express = require("express");
const Cookies = require("cookies");
const cookieParser = require("cookie-parser");
const configurableMiddleware = require("./configurableMiddleware");
const app = express();

/**
 * A middleware is simply a function that has access to req (request object), res (response object) and next (function)
 * it has to terminate the req res cycle or call the next function to pass control to the next middlware.
 */

// Logger middleware
const myLogger = (req, res, next) => {
  console.log("Logger");

  // to pass control to the next middleware in the app
  next();
};

// Request time middleware
const requestTime = (req, res, next) => {
  // adding requestTime variable to the req boject
  req.requestTime = Date.now();

  // pass control to the next middleware
  next();
};

// Coockie validator external function
const validateCookies = (req, res, next) => {
  // Optionally define keys to sign cookie values to prevent
  // client tempering
  const keys = ["keyboard cat"];
  // Create a cookies object
  const cookies = new Cookies(req, res, { keys: keys });

  // Get a cookie
  const lastVisit = cookies.get("LastVisit", { signed: true });

  // Set the cookie to a values
  cookies.set("LastVisit", new Date().toISOString(), { signed: true });
  if (!lastVisit) {
    res.setHeader("Content-Type", "text/palin");
    res.send("Welcome, first time visitor!");
  } else {
    res.setHeader("Content-Type", "text/plain");
    res.send(
      `Welcome back! Nothing much changed since your last visit at ${lastVisit}.`,
    );
  }
};

// Loading outside middlewares
app.use(cookieParser());

// Lading the custom middlewares
app.use(validateCookies);
app.use(myLogger);
app.use(requestTime);
// This is how we use configurable middlewares
app.use(configurableMiddleware({ option1: "1", option2: "2" }));

// route for the root page
app.get("/", (req, res) => {
  let responseText = "Hello World!<br/>";
  responseText += `<small>Requested at: ${req.requestTime} </small>`;
  res.send(responseText);
});

app.listen(3001, () => console.log("Server listening on port 3001..."));
