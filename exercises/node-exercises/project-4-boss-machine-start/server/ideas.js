const express = require("express");
const router = express.Router();
const Joi = require("joi");

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  deleteFromDatabasebyId,
  updateInstanceInDatabase,
} = require("./db");

const checkMillionDollarIdea = require("./checkMillionDollarIdea");

router.param("ideaId", (req, res, next, id) => {
  const idea = getFromDatabaseById("ideas", id);
  if (idea) {
    req.idea = idea;
    next();
  } else {
    res.status(404).send("Idea with the given ID was not found!");
  }
});

router.get("/", (req, res) => {
  const ideas = getAllFromDatabase("ideas");
  res.send(ideas);
});

router.post("/", checkMillionDollarIdea, (req, res) => {
  const { error } = validateIdea(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const idea = addToDatabase("ideas", req.body);
  res.status(201).send(idea);
});

router.get("/:ideaId", (req, res) => {
  res.send(req.idea);
});

router.put("/:ideaId", checkMillionDollarIdea, (req, res) => {
  const { error } = validateIdea(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const idea = updateInstanceInDatabase("ideas", req.body);
  res.send(idea);
});

router.delete("/:ideaId", (req, res) => {
  const idea = deleteFromDatabasebyId("ideas", req.params.ideaId);
  if (!idea)
    return res.status(404).send("Idea with the given ID was not found!");

  res.status(204).send(idea);
});

function validateIdea(idea) {
  const schema = Joi.object({
    name: Joi.string().min(3).trim().required(),
    description: Joi.string().min(3).trim().required(),
    numWeeks: Joi.number().required(),
    weeklyRevenue: Joi.number().required(),
  });

  return schema.validate(idea);
}

module.exports = router;
