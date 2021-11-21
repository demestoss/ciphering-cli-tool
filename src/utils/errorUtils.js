const tryCatch =
  (callback, errorHandler) =>
  (...args) => {
    try {
      return callback(...args);
    } catch (e) {
      errorHandler(e);
    }
  };

const processExitErrorHandler = (e) => {
  process.stderr.write(e.message);
  process.exit(1);
};

const throwError = (message) => {
  throw new Error(message);
};

module.exports = {
  throwError,
  tryCatch,
  processExitErrorHandler,
};
