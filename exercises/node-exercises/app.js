const express = require("express");
const server = express();
const users = require("./users");

// Setting the port
server.set("port", process.env.PORT || 3000);

// Adding routes
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.get("/users", (req, res) => {
  res.send(users);
});

// Bindding to localhost://3000
server.listen(3000, () => {
  console.log("Express server started at port 3000");
});
