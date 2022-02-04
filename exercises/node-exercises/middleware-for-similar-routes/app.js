const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const data = [1, 2, 3, 4, 5];

// custom middleware for any routes that matches /data/:index
const indexExists = (req, res, next) => {
  const index = req.params.index;
  if (data[index]) {
    next();
  } else {
    res.status(404).send("Index doesn't exists!");
  }
};

// Load middleware
app.use("/data/:index", indexExists);

app.get("/data/:index", (req, res) => {
  res.send(data[req.params.index]);
});

app.put("/data/:index", (req, res) => {
  data[req.params.index] = req.body.number;
  res.send(data[req.params.index]);
});

app.delete("/data/:index", (req, res) => {
  data.splice(req.params.index, 1);
  res.status(204).send();
});

app.get("/", (req, res, next) => {
  res.send(data);
});

app.listen(port, () => console.log(`Server listening or port ${port}...`));
