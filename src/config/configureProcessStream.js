const configureProcessStream = () => {
  process.on("exit", (code) => {
    if (code) {
      console.log(`\nProgram stopped with code: ${code}`);
    }
  });
};

module.exports = configureProcessStream;
