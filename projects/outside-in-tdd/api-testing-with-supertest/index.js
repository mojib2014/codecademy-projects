const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const users = require("./routes/users");

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/users", users);

app.listen(port, () => console.log("Server listening on port ", port));

module.exports = app;
