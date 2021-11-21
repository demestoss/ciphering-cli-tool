const validateOptionWithValue = require("./validateOptionWithValue");
const parseOptionWithoutValue = require("./parseOptionWithoutValue");
const validateOptionWithoutValue = require("./validateOptionWithoutValue");
const parseOptionWithValue = require("./parseOptionWithValue");

const getFlagsFromArgv = (argv, flags) =>
  argv.filter((el) => flags.includes(el));

const parseCliOptions = (argv, options) =>
  options.reduce((acc, option) => {
    const finded = getFlagsFromArgv(argv, option.flags());

    if (option.withoutValue) {
      validateOptionWithoutValue(finded, option);
      return parseOptionWithoutValue(finded, option, acc);
    } else {
      validateOptionWithValue(finded, option);
      return parseOptionWithValue(
        argv,
        finded,
        option,
        acc
      );
    }
  }, {});

module.exports = parseCliOptions;
