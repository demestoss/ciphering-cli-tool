const parseOptionWithoutValue = (
  findedOption,
  option,
  acc
) => {
  if (findedOption.length === 0) {
    acc[option.name] = false;
    return acc;
  } else {
    acc[option.name] = true;
    return acc;
  }
};

module.exports = parseOptionWithoutValue;
