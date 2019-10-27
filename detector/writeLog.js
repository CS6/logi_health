const fs = require("fs");
const path = require("path");

let visited = {};

if (!fs.existsSync(path.resolve("logs"))) {
    fs.mkdirSync(path.resolve("logs"));
}

function writeLog(fileName, text) {
    var filePath = path.resolve(`logs/${fileName}`);

    if (!visited[fileName]) {
        fs.writeFileSync(filePath, "[");
        visited[fileName] = true;
    }

    fs.appendFileSync(filePath, `${text}\n`);
}

module.exports = { writeLog };