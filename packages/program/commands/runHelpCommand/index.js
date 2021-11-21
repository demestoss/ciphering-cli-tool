const getOptionsPrintData = require("./getOptionsPrintData");
const printOptionsData = require("./printOptionsData");

const runHelpCommand = (programState) => {
  const { options, name, description } = programState;

  process.stdout.write(`Name: ${name}\n`);
  process.stdout.write(`Description: ${description}\n\n`);

  process.stdout.write("Options:\n");
  const optionsPrintData = getOptionsPrintData(options);
  printOptionsData(optionsPrintData);

  process.exit(0);
};

module.exports = runHelpCommand;
