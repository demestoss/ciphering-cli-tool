const genCipheringArray = require("./processes/genCipheringArray");
const createReadStream = require("./processes/createReadStream");
const createWriteStream = require("./processes/createWriteStream");
const createTransformStream = require("./processes/createTransformStream");
const runProcessPipeline = require("./processes/runProcessPipeline");

const runCipheringProcess = (options, ciphersMap) => {
  const { input, output, config } = options;
  const readStream = createReadStream(input);
  const writeStream = createWriteStream(output);
  const cipheringArray = genCipheringArray(
    config,
    ciphersMap
  );
  const transformStreams = cipheringArray.map(
    createTransformStream
  );

  runProcessPipeline(
    readStream,
    transformStreams,
    writeStream
  );
};

module.exports = runCipheringProcess;
