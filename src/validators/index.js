const path = require("path");
const fs = require("fs");
const { tryCatch } = require("../utils/errorUtils");

const isValueExists = (v) => !!v;

const isFileExists = (fileName) =>
  fs.existsSync(path.resolve(fileName));

const getFileAccess = (fileName, accessType) =>
  fs.accessSync(path.resolve(fileName), accessType);

const isFileAccessible = (accessType) =>
  tryCatch(
    (fileName) => {
      getFileAccess(fileName, accessType);
      return true;
    },
    () => false
  );

const isFileReadable = isFileAccessible(fs.constants.R_OK);

const isFileWritable = isFileAccessible(fs.constants.W_OK);

module.exports = {
  isValueExists,
  isFileExists,
  isFileReadable,
  isFileWritable,
};
