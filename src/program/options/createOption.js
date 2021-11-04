const parseParams = require("./parseParams");
const { throwError } = require("../../utils/errorUtils");

const createOption = (params) => {
  const state = parseParams(params);

  const validate = (optionValue) => {
    state.validators.forEach(({ error, callback }) => {
      const isValid = callback(optionValue);
      if (!isValid) {
        throwError(error);
      }
    });
  };

  const flags = () => {
    return [state.long, state.short];
  };

  const name = () => {
    return state.optionName;
  };

  const defaultValue = (value) => {
    if (value) {
      state.defaultValue = value;
    }

    return state.defaultValue;
  };

  return {
    name,
    flags,
    defaultValue,
    validate,
    get isOptional() {
      return state.isOptional;
    },
  };
};

module.exports = createOption;
