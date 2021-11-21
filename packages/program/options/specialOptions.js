const createOption = require("./createOption");
const {
  HELP_OPTION_FLAGS,
  VERSION_OPTION_FLAGS,
} = require("../config/constants");

const defaultOptions = () => [
  createOption({
    name: HELP_OPTION_FLAGS.join(" "),
    description: "Display help for command",
  }),
  createOption({
    name: VERSION_OPTION_FLAGS.join(" "),
    description: "Output the version number",
  }),
];

module.exports = defaultOptions;
