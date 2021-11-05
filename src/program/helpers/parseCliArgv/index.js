const parseCliOptions = require("./parseCliOptions");
const {
  throwError,
  processExitErrorHandler,
  tryCatch,
} = require("../../../utils/errorUtils");

const validateCliOptions = (argv, options) => {
  const allFlags = options.map((el) => el.flags()).flat();
  const cliFlags = argv.filter((el) => el.startsWith("-"));

  cliFlags.forEach((flag) => {
    if (!allFlags.includes(flag)) {
      throwError(`'${flag}' is unknown flag`);
    }
  });
};

const parseCliArgv = (argv, options) => {
  validateCliOptions(argv, options);
  return parseCliOptions(argv, options);
};

module.exports = tryCatch(
  parseCliArgv,
  processExitErrorHandler
);
