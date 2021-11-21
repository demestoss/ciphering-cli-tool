const {
  throwError,
} = require("../../../../src/utils/errorUtils");

const validateOptionWithoutValue = (
  findedCliOption,
  option
) => {
  if (findedCliOption.length > 1) {
    throwError(
      `Option '${option.name}' repeated more then one time`
    );
  }
};

module.exports = validateOptionWithoutValue;
