const parseParams = require("./parseParams");
const {
  throwError,
} = require("../../../src/utils/errorUtils");

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
    return [state.short, state.long];
  };

  const defaultValue = (value) => {
    if (value) {
      state.defaultValue = value;
    }

    return state.defaultValue;
  };

  return {
    get name() {
      return state.name;
    },
    get description() {
      return state.description;
    },
    get isOptional() {
      return state.isOptional;
    },
    get withoutValue() {
      return state.withoutValue;
    },
    flags,
    defaultValue,
    validate,
  };
};

module.exports = createOption;
