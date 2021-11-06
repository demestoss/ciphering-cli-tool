const createOption = require("../../../program/options/createOption");
const {
  inputOptionValidators,
  outputOptionValidators,
  configOptionValidators,
} = require("./genValidators");

const genOptions = (ciphersMap) => [
  createOption({
    name: "-i --input <input>",
    description: "A path to input file",
    validators: inputOptionValidators(),
    isOptional: true,
  }),
  createOption({
    name: "-o --output <output>",
    description: "A path to output file",
    validators: outputOptionValidators(),
    isOptional: true,
  }),
  createOption({
    name: "-c --config <config>",
    description:
      "Config for ciphers. Config is a string with pattern {XY(-)}n",
    validators: configOptionValidators(ciphersMap),
  }),
];

module.exports = genOptions;
