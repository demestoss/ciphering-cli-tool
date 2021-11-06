const fs = require("fs");
const path = require("path");

const getDefaultInput = () => {
  console.log("Please enter the text to encrypt:");
  return process.stdin;
};

const createStream = (input) =>
  fs.createReadStream(path.resolve(input));

const createReadStream = (input) =>
  input ? createStream(input) : getDefaultInput();

module.exports = createReadStream;
