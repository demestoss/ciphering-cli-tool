const genericCaesarCipherService = require("../genericCaesarCipher");

const baseRotCipher = (number) =>
  genericCaesarCipherService({ shift: number });

const rot8Cipher = baseRotCipher(8);

module.exports = {
  rot8Cipher,
};
