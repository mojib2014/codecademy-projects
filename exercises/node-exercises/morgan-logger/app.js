const express = require("express");
const app = express();
const morgan = require("morgan");

const port = process.env.PORT || 3000;

app.use(morgan("short"));

app.get("/say-hi", (req, res, next) => {
  res.send("Hi!");
});

app.get("/say-bye", (req, res, next) => {
  res.send("Bye!");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
