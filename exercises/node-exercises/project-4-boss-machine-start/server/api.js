const express = require("express");
const apiRouter = express.Router();

const minions = require("./minions");
const ideas = require("./ideas");
const meetings = require("./meetings");

apiRouter.use("/minions", minions);
apiRouter.use("/ideas", ideas);
apiRouter.use("/meetings", meetings);

module.exports = apiRouter;
