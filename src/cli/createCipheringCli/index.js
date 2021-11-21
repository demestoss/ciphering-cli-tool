const {
  createProgram,
} = require("../../../packages/program");
const genCipheringCliOptions = require("./cliOptions/genOptions");

const createCipheringCli = () => {
  return createProgram({
    name: "Ciphering CLI tool",
    description: "CLI tool for ciphering the data",
    options: genCipheringCliOptions(),
  });
};

module.exports = createCipheringCli;
