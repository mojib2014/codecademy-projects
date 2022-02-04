const express = require("express");

const app = express();

// A middleware function with not mount path
// It gets executed every time app receives a request
app.use(function (req, res, next) {
  console.log("middleware executed it's code");

  next();
});

// This middleware function gets executed for every HTTP
// request on /user/:id path.
// and uses a arrow function syntax (javascript)
app.use("/user/:id", (req, res, next) => {
  res.send("Request Type: " + req.method);
});

// This middleware function handles GET requests to the
// /user/:id path
app.get("/user/:id", (req, res, next) => {
  res.send("Found a user by the given ID");
});

// Loading series of middlewares at a mount point with
// a mount path (middleware sub-stack)
app.use(
  "/user/:id",
  (req, res, next) => {
    console.log("Request URL: ", req.originalUrl);

    next();
  },
  (req, res, next) => {
    console.log("Request Type: ", req.method);
  },
);

// Start the server
app.listen(3001, () => console.log("Server Listening on port ", 3001));
