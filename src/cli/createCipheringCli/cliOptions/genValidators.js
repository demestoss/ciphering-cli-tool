const validateConfig = require("./validateConfig");
const {
  isFileExists,
  isFileWritable,
  isFileReadable,
} = require("../../../validators");

const notExistsOrTruthyCase = (func) => (value) =>
  !value || func(value);

const inputOptionValidators = () => [
  {
    callback: notExistsOrTruthyCase(isFileExists),
    error: "Input file is not exists",
  },
  {
    callback: notExistsOrTruthyCase(isFileReadable),
    error: "Input file is not readable",
  },
];

const outputOptionValidators = () => [
  {
    callback: notExistsOrTruthyCase(isFileExists),
    error: "Output file is not exists",
  },
  {
    callback: notExistsOrTruthyCase(isFileReadable),
    error: "Output file is not readable",
  },
  {
    callback: notExistsOrTruthyCase(isFileWritable),
    error: "Output file is not writable",
  },
];

const configOptionValidators = () => [
  {
    callback: validateConfig,
    error: "Cipher config is invalid",
  },
];

module.exports = {
  inputOptionValidators,
  outputOptionValidators,
  configOptionValidators,
};
