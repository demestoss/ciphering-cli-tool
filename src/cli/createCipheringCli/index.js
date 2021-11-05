const createProgram = require("../../program/createProgram");
const genCipheringCliOptions = require("./cliOptions/genOptions");
const proceed = require("./proceed");

const createCipheringCli = () => {
  const program = createProgram({
    name: "Ciphering CLI tool",
    description: "CLI tool for ciphering the data",
    options: genCipheringCliOptions(),
  });

  return {
    ...program,
    proceed: proceed(program),
  };
};

module.exports = createCipheringCli;
