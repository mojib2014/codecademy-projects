const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const secretData = {
  adminUsers: ["1", "2", "51"],
  coolPhoneNumbers: ["555-555-CODE", "555-EXP-RESS", "MID-DLE-WARE"],
  favSites: ["codecademy.com", "expressjs.com"],
};

const publicData = {
  colors: ["green", "orange"],
  numbers: [1, 2, 3, 4, 5],
};

// Middleware that checks if a user is admin or not in other words
// Controls if a user has access to specific resources or not
const isAdmin = (req, res, next) => {
  const id = req.params.userId;
  if (!secretData.adminUsers.includes(id)) {
    res.status(401).send("Access denied!"); // Unauthorized
  } else {
    next();
  }
};

app.get("/:userId/colors", (req, res, next) => {
  res.send(publicData.colors);
});

app.get("/:userId/numbers", (req, res, next) => {
  res.send(publicData.numbers);
});

app.get("/:userId/phone-numbers", isAdmin, (req, res, next) => {
  res.send(secretData.coolPhoneNumbers);
});

app.get("/:userId/fav-sites", isAdmin, (req, res, next) => {
  res.send(secretData.favSites);
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));
