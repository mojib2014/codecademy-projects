const fs = require("fs");
const YAML = require("yaml");

const file = fs.readFileSync("./stuff.yaml", "utf-8");

const doc = YAML.parseAllDocuments(file);
console.log(doc);
