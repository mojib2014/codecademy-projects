const express = require("express");
const fs = require("fs");
const app = express();

app.engine("ntl", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    const rendered = content
      .toString()
      .replace("#title#", "<h1>" + options.title + "</h1>")
      .replace("#message#", "<p>" + options.message + "</p>");

    return callback(null, rendered);
  });
});

app.set("views", "./views");
app.set("view engine", "ntl");

app.get("/", (req, res) => {
  res.render("index", {
    title: "hey",
    message: "Oh yea created my first template engine",
  });
});

app.listen(3001, () => console.log("Listening..."));
