const genericCaesarCipherService = require("../genericCaesarCipher");

const {
  encode: caesarCipherEncoder,
  decode: caesarCipherDecoder,
} = genericCaesarCipherService({ shift: 1 });

module.exports = {
  caesarCipherEncoder,
  caesarCipherDecoder,
};
