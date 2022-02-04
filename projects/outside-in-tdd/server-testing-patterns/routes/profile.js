const express = require("express");
const router = express.Router();

router.get("/:username", (req, res) => {
  const username = req.params.username;
  res.render("profile", { username });
});

module.exports = router;
