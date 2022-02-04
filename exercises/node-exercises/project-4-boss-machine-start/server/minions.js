const express = require("express");
const router = express.Router();
const Joi = require("joi");

const {
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");
// const validateObjectId = require("./validateObjectId"); // For validating objectId that mongoose automatically creates in this it wouldn't work (middleware)

router.param("minionId", (req, res, next, id) => {
  const minion = getFromDatabaseById("minions", id);
  if (minion) {
    req.minion = minion;
    next();
  } else {
    res.status(404).send("Minion with the given ID was not found!");
  }
});

router.get("/", (req, res, next) => {
  res.send(getAllFromDatabase("minions"));
});

router.post("/", (req, res) => {
  const { error } = validateMinion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const minion = addToDatabase("minions", req.body);
  res.status(201).send(minion);
});

router.get("/:minionId", (req, res) => {
  res.send(req.minion);
});

router.put("/:minionId", (req, res) => {
  const { error } = validateMinion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const mionion = updateInstanceInDatabase("minions", req.body);
  res.send(mionion);
});

router.delete("/:minionId", (req, res) => {
  const minion = deleteFromDatabasebyId("minions", req.params.minionId);
  if (!minion)
    return res.status(404).send("Minion with the given ID was not found!");

  res.status(204).send(minion);
});

// Todo: add work routes
router.get("/:minionId/work", (req, res) => {
  const work = getAllFromDatabase("work").filter(
    (work) => work.minionId === req.params.minionId,
  );

  res.send(work);
});

router.post("/:minionId/work", (req, res) => {
  const { error } = validateWork(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const work = req.body;
  work.minionId = req.params.minionId;
  const newWork = addToDatabase("work", work);
  res.status(201).send(newWork);
});

router.param("workId", (req, res, next, id) => {
  const work = getFromDatabaseById("work", id);
  if (work) {
    req.work = work;
    next();
  } else {
    res.status(404).send("Work with the given ID was not found!");
  }
});

router.put("/:minionId/work/:workId", (req, res) => {
  const { error } = validateWork(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (req.params.minionId !== req.body.minionId)
    return res
      .status(400)
      .send("Bad request: Minion with given ID does not exist!");

  const work = updateInstanceInDatabase("work", req.body);
  res.send(work);
});

router.delete("/:minionId/work/:workId", (req, res) => {
  const work = deleteFromDatabasebyId("work", req.params.workId);
  if (!work)
    return res.status(404).send("Work with the given ID was not found!");

  res.status(204).send(work);
});

function validateMinion(minion) {
  const schema = Joi.object({
    name: Joi.string().min(3).trim().required(),
    title: Joi.string().min(3).trim().required(),
    weaknesses: Joi.string().required(),
    salary: Joi.number().required(),
  });

  return schema.validate(minion);
}

function validateWork(work) {
  const schema = Joi.object({
    title: Joi.string().min(3).trim().required(),
    description: Joi.string().min(3).trim().required(),
    hours: Joi.number().required(),
    minionId: Joi.string().required(),
  });

  return schema.validate(work);
}

module.exports = router;
