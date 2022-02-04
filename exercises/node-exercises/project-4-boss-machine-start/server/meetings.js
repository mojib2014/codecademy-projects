const express = require("express");
const router = express.Router();
const Joi = require("joi");

const {
  getAllFromDatabase,
  addToDatabase,
  createMeeting,
  deleteAllFromDatabase,
} = require("./db");

router.get("/", (req, res) => {
  const meetings = getAllFromDatabase("meetings");
  res.send(meetings);
});

router.post("/", (req, res) => {
  const { error } = validateMeeting(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const meeting = addToDatabase("meetings", createMeeting());
  res.status(201).send(meeting);
});

router.delete("/", (req, res) => {
  deleteAllFromDatabase("meetings");
  res.status(204).send();
});

function validateMeeting(meeting) {
  const schema = Joi.object({
    time: Joi.string().length(4).required(),
    date: Joi.string().isoDate().required(),
    day: Joi.string().required(),
    note: Joi.string().min(3).required(),
  });

  return schema.validate(meeting);
}

module.exports = router;
