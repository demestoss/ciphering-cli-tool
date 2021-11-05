const {
  tryCatch,
  processExitErrorHandler,
  throwError,
} = require("../../utils/errorUtils");

const genOptionName = (long, optionName) => {
  if (!optionName) {
    return {
      name: long.replaceAll("-", ""),
      withoutValue: true,
    };
  }

  if (optionName[0] !== "<" || optionName.at(-1) !== ">") {
    throwError(
      "Option's name should have '<optionName>' format"
    );
  }

  return {
    name: optionName.replace("<", "").replace(">", ""),
    withoutValue: false,
  };
};

const parseName = (name) => {
  const [short, long, optionName] = name.split(" ");

  if (!short || !long) {
    throwError(
      "Option's name should have '-short --long' flags specified"
    );
  }

  const { name: newName, withoutValue } = genOptionName(
    long,
    optionName
  );

  return {
    short,
    long,
    name: newName,
    withoutValue,
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
