const genOptionName = (option) => {
  const [short, long] = option.flags();
  if (option.withoutValue) {
    return `${short}, ${long}`;
  } else {
    return `${short}, ${long} <${option.name}>`;
  }
};

const getOptionsPrintData = (options) =>
  options.map((option) => {
    const name = genOptionName(option);
    return { name, description: option.description };
  });

module.exports = getOptionsPrintData;
