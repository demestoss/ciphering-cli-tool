const validateOptions = require("./validateOptions");
const defaultOptions = require("../options/defaulOptions");
const { DEFAULT_VERSION } = require("../config/constants");
const {
  tryCatch,
  processExitErrorHandler,
  throwError,
} = require("../../utils/errorUtils");

const parseProgramParams = (params) => {
  const {
    name,
    description = "",
    version = DEFAULT_VERSION,
    options = [],
  } = params;

  if (!name) {
    throwError("Please specify program name");
  }

  return {
    name,
    description,
    version,
    options: [
      ...defaultOptions(),
      ...validateOptions(options),
    ],
  };
};

module.exports = tryCatch(
  parseProgramParams,
  processExitErrorHandler
);
