const { throwError } = require("../../../utils/errorUtils");

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

const parseOptionWithValue = (
  argv,
  findedOption,
  option,
  acc
) => {
  if (findedOption.length === 0 && option.isOptional) {
    return acc;
  }

  const optionValue = getFindedValue(argv, findedOption);
  validateOptionValue(option, optionValue);

  acc[option.name] = optionValue;
  return acc;
};

module.exports = parseOptionWithValue;
