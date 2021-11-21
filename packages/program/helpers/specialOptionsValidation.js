const runHelpCommand = require("../commands/runHelpCommand");
const runVersionCommand = require("../commands/runVersionCommand");
const {
  HELP_OPTION_FLAGS,
  VERSION_OPTION_FLAGS,
} = require("../config/constants");

const isArgvIncludesFlags = (flags) => (argv) =>
  argv.some((arg) => flags.includes(arg));

const isHelpFlagsIncluded = isArgvIncludesFlags(
  HELP_OPTION_FLAGS
);

const isVersionFlagsIncluded = isArgvIncludesFlags(
  VERSION_OPTION_FLAGS
);

const specialOptionsValidation = (argv, state) => {
  if (isHelpFlagsIncluded(argv)) {
    runHelpCommand(state);
  }

  if (isVersionFlagsIncluded(argv)) {
    runVersionCommand(state);
  }
};

module.exports = specialOptionsValidation;
