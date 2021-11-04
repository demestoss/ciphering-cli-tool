const validateOptions = require("./validateOptions");
const {
  tryCatch,
  processExitErrorHandler,
  throwError,
} = require("../../utils/errorUtils");

const parseProgramParams = (params) => {
  const { name, description = "", options = [] } = params;

  if (!name) {
    throwError("Please specify program name");
  }

  return {
    name,
    description,
    options: validateOptions(options),
  };
};

module.exports = tryCatch(
  parseProgramParams,
  processExitErrorHandler
);
