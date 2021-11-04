const {
  caesarCipherEncoder,
  caesarCipherDecoder,
  rot8CipherEncoder,
  rot8CipherDecoder,
  atbashCipher,
} = require("../../../services/ciphers");
const {
  CipheringAlgorithms: CA,
  CipheringMode: CM,
} = require("./constants");

const ciphersMap = {
  [CA.CAESAR + CM.ENCODE]: caesarCipherEncoder,
  [CA.CAESAR + CM.DECODE]: caesarCipherDecoder,
  [CA.ROT8 + CM.ENCODE]: rot8CipherEncoder,
  [CA.ROT8 + CM.DECODE]: rot8CipherDecoder,
  [CA.ATBASH]: atbashCipher,
};

module.exports = ciphersMap;
