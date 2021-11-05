const parseProgramParams = require("./helpers/parseProgramParams");
const parseCliArgv = require("./helpers/parseCliArgv");
const validateOptions = require("./helpers/validateOptions");
const specialOptionsValidation = require("./helpers/specialOptionsValidation");
const getOptionsWithoutSpecial = require("./helpers/getOptionsWithoutSpecial");

const createProgram = (params) => {
  const state = parseProgramParams(params);

  const description = () => {
    return state.description;
  };

  const name = () => {
    return state.name;
  };

  const version = () => {
    return state.version;
  };

  const opts = () => {
    return state.cliOptions;
  };

  const parse = (argv) => {
    specialOptionsValidation(argv, state);
    state.cliOptions = parseCliArgv(
      argv,
      optionsWithoutSpecial()
    );
  };

  const optionsWithoutSpecial = () => {
    return getOptionsWithoutSpecial(state.options);
  };

  const addOption = (option) => {
    try {
      validateOptions([...state.options, option]);
      state.options.push(option);
    } catch (e) {
      process.stderr.write(e.message);
    }
  };

  return {
    description,
    name,
    version,
    addOption,
    parse,
    opts,
  };
};

module.exports = createProgram;
