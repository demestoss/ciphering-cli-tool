const { hasDuplicates } = require("../../utils/arrayUtils");
const { throwError } = require("../../utils/errorUtils");

const validateOptions = (options) => {
  const isValid = options.every(
    (option) =>
      option.name && option.validate && option.flags
  );
  if (!isValid) {
    throwError(
      "Please use 'createOption' function to create an option"
    );
  }

  const allFlags = options.map((option) => option.flags());
  if (hasDuplicates(allFlags)) {
    throwError("Option's flags have duplicates");
  }

  const allNames = options.map((option) => option.name());
  if (hasDuplicates(allNames)) {
    throwError("Option's names have duplicates");
  }

  return options;
};

module.exports = validateOptions;
