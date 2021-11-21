const genericCaesarCipherService = require("../genericCaesarCipher");

const caesarCipher = genericCaesarCipherService({
  shift: 1,
});

module.exports = {
  caesarCipher,
};
