const fs = require("fs");
const path = require("path");

function loadJson(fileName) {
  const filePath = path.join(__dirname, "../../tests/data", fileName);
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

module.exports = { loadJson };
