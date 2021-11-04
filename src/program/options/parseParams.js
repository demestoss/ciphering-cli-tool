const {
  tryCatch,
  processExitErrorHandler,
  throwError,
} = require("../../utils/errorUtils");

const parseName = (name) => {
  const [short, long, optionName] = name.split(" ");

  if (!short || !long || !optionName) {
    throwError(
      "Option's name should have '-short --long optionName' structure"
    );
  }

  return {
    short,
    long,
    optionName,
  };
};

const parseValidators = (validators) => {
  const isValid = validators.every(
    (validator) => validator.callback && validator.error
  );

  if (!isValid) {
    throwError(
      "Validators should have signature { callback, error }"
    );
  }

  return validators;
};

const parseParams = (optionParams) => {
  const {
    name,
    validators = [],
    description = "",
    defaultValue = undefined,
    isOptional = false,
  } = optionParams;

  return {
    ...parseName(name),
    validators: parseValidators(validators),
    isOptional,
    defaultValue,
    description,
  };
};

module.exports = tryCatch(
  parseParams,
  processExitErrorHandler
);
