const {
  throwError,
} = require("../../../../src/utils/errorUtils");

const validateOptionWithValue = (
  findedCliOption,
  option
) => {
  if (findedCliOption.length === 0 && !option.isOptional) {
    throwError(`Missed required option '${option.name}'`);
  }

  if (findedCliOption.length > 1) {
    throwError(
      `Option '${option.name}' repeated more then one time`
    );
  }
};

module.exports = validateOptionWithValue;
