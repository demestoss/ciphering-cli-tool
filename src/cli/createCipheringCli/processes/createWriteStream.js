const fs = require("fs");
const path = require("path");

const getDefaultOutput = () => process.stdout;

const createStream = (output) =>
  fs.createWriteStream(path.resolve(output), {
    flags: "a",
  });

const createWriteStream = (output) =>
  output ? createStream(output) : getDefaultOutput();

module.exports = createWriteStream;
