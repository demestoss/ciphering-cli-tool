const {
  throwError,
  processExitErrorHandler,
  tryCatch,
} = require("../../utils/errorUtils");

const getFlagsFromArgv = (argv, flags) =>
  argv.filter((el) => flags.includes(el));

const validateArgvFinded = (finded, option) => {
  if (finded.length === 0 && !option.isOptional) {
    throwError(`Missed required option '${option.name()}'`);
  }

  if (finded.length > 1) {
    throwError(
      `Option '${option.name()}' repeated more then one time`
    );
  }
};

const getFindedValue = (argv, finded) => {
  const idx = argv.findIndex((el) => el === finded[0]);
  if (!argv[idx + 1]) {
    throwError(
      `Please specify value for '${finded[0]}' flag`
    );
  }

  return argv[idx + 1];
};

const validateOptionValue = (option, value) =>
  option.validate(value);

const validateCliOptions = (argv, options) => {
  const allFlags = options.map((el) => el.flags()).flat();
  const cliFlags = argv.filter((el) => el.startsWith("-"));

  cliFlags.forEach((flag) => {
    if (!allFlags.includes(flag)) {
      throwError(
        `'${flag}' is unknown flag, please use something different`
      );
    }
  });
};

const parseCliOptions = (argv, options) =>
  options.reduce((acc, option) => {
    const finded = getFlagsFromArgv(argv, option.flags());
    validateArgvFinded(finded, option);
    if (finded.length === 0 && option.isOptional) {
      return acc;
    }

    const optionValue = getFindedValue(argv, finded);
    validateOptionValue(option, optionValue);

    acc[option.name()] = optionValue;
    return acc;
  }, {});

const parseCliArgv = (argv, options) => {
  validateCliOptions(argv, options);
  return parseCliOptions(argv, options);
};

module.exports = tryCatch(
  parseCliArgv,
  processExitErrorHandler
);
