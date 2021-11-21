const calcLongestString = (data) =>
  data.reduce((acc, current) => {
    const { name } = current;
    const nameLength = name.length;
    return nameLength > acc ? nameLength : acc;
  }, 0);

const printOptionsData = (printData) => {
  const longestNameString = calcLongestString(printData);
  printData.forEach((data) => {
    const { name, description } = data;
    const spacesCount = longestNameString - name.length + 2;
    process.stdout.write(
      `  ${name}${" ".repeat(spacesCount)}${description}\n`
    );
  });
};

module.exports = printOptionsData;
