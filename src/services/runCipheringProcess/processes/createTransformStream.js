const { Transform } = require("stream");

const createTransformStream = (cipher) => {
  return new Transform({
    transform: (chunk, encoding, callback) => {
      const data = chunk.toString();
      const cipheredData = cipher(data);
      callback(null, cipheredData);
    },
  });
};

module.exports = createTransformStream;
