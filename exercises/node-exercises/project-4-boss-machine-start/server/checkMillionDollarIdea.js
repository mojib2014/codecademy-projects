const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;
  if (!numWeeks || !weeklyRevenue)
    return res
      .status(400)
      .send("numWeeks and weeklyRevenue properties are required");

  const total = Number(numWeeks) * Number(weeklyRevenue);
  if (isNaN(total) || total < 1000000)
    return res.status(400).send("Idea must at least be worth 1M");

  next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
