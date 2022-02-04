const express = require("express");
const app = express();

const database = {
  snacks: ["chips", "apple", "cookies"],
  sides: ["beans and rice", "cole slaw", "broccoli"],
  appetizers: ["oysters", "dumplings", "smoked almonds"],
};

const port = process.env.PORT || 3000;

const timeMiddleware = (req, res, next) => {
  req.date = Date.now().getFullYear();
  next();
};

app.use(timeMiddleware);

app.get("/snacks", (req, res, next) => {
  res.send(`Snacks as of ${req.date}: ${database.snacks}`);
});

app.get("/sides", (req, res, next) => {
  res.send(`Sides as of ${req.date}: ${database.sides}`);
});

app.get("/appetizers", (req, res, next) => {
  res.send(`Appetizers as of ${req.date}: ${database.appetizers}`);
});

app.listen(port, () => console.log(`Server listening to port ${port}...`));
