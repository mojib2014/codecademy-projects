const express = require("express");
const morgan = require("morgan");
const app = express();

const quotes = require("./routes/qoutes");

const port = process.env.PORT || 4001;

app.use(express.static("public"));
app.use("/api/quotes", quotes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
