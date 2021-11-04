const configureProcessStream = () => {
  process.on("exit", (code) => {
    if (code) {
      console.log(`\n\nProgram stopped with code: ${code}`);
    }
  });
};

module.exports = configureProcessStream;
