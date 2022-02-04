const express = require("express");
const appleRouter = express.Router();
const app = express();

const port = process.env.PORT || 3000;

const apples = {
  mcintosh: {
    description: "Classic, juicy, bright",
    priceRange: "medium",
    color: "green and red",
  },
  honeycrisp: {
    description: "Crisp, sweet!",
    priceRange: "pricey",
    color: "red and yellow",
  },
  goldenDelicious: {
    description: "rich, custardy",
    priceRange: "cheap",
    color: "yellow",
  },
};

appleRouter.param("variety", (req, res, next, variety) => {
  console.log("variety", variety);
  if (!apples[variety]) {
    res.status(404).send("Could not find item!");
  } else {
    req.variety = apples[variety];
    next();
  }
});

appleRouter.get("/:variety/description", (req, res, next) => {
  res.send(req.variety.description);
});

appleRouter.get("/:variety/price-range", (req, res, next) => {
  res.send(req.variety.priceRange);
});

appleRouter.get("/:variety/color", (req, res, next) => {
  res.send(req.variety.color);
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));
