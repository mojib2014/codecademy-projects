// routes/index.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  const { quote, attributed, source } = req.body;
  res.render("index", { quote, attributed, source });
});

module.exports = router;
