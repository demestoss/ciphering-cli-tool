const { SPECIAL_OPTIONS } = require("../config/constants");

const getOptionsWithoutSpecial = (options) =>
  options.filter((option) => {
    const [short] = option.flags();
    return !SPECIAL_OPTIONS.includes(short);
  });

module.exports = getOptionsWithoutSpecial;
