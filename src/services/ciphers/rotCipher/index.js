const genericCaesarCipherService = require("../genericCaesarCipher");

const baseRotCipher = (number) =>
  genericCaesarCipherService({ shift: number });

const {
  encode: rot8CipherEncoder,
  decode: rot8CipherDecoder,
} = baseRotCipher(8);

module.exports = {
  rot8CipherEncoder,
  rot8CipherDecoder,
};
