const parseProgramParams = require("./helpers/parseProgramParams");
const parseCliArgv = require("./helpers/parseCliArgv");
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

  return {
    description,
    name,
    version,
    parse,
    opts,
  };
};

module.exports = createProgram;
