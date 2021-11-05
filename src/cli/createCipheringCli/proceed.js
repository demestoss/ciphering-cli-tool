const genCipheringArray = require("./processes/genCipheringArray");
const createReadStream = require("./processes/createReadStream");
const createWriteStream = require("./processes/createWriteStream");
const createTransformStream = require("./processes/createTransformStream");
const runProcessPipeline = require("./processes/runProcessPipeline");

const proceed = (program) => () => {
  const { input, output, config } = program.opts();
  const readStream = createReadStream(input);
  const writeStream = createWriteStream(output);
  const cipheringArray = genCipheringArray(config);
  const transformStreams = cipheringArray.map(
    createTransformStream
  );

  runProcessPipeline(
    readStream,
    transformStreams,
    writeStream
  );
};

module.exports = proceed;
