const express = require("express");
const router = express.Router();

// Get all users
router.get("/", (req, res) => {
  return res.json("All users sent");
});

// Get a specific user
router.get("/:id", (req, res) => {
  if (req.params.id === "U001") return res.json("User U001 found!");

  return res.status(404).json("User not found!");
});

// Add a user
router.post("/", (req, res) => {
  let content = req.body;
  if (content.id) return res.status(201).json("User created!");
  return res.status(400).json("User not created!");
});

module.exports = router;
