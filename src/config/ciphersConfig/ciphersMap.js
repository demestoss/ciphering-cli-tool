const {
  caesarCipherEncoder,
  caesarCipherDecoder,
  rot8CipherEncoder,
  rot8CipherDecoder,
  atbashCipher,
} = require("../../services/ciphers");
const {
  CipheringAlgorithms: CA,
  CipheringMode: CM,
} = require("./constants");

const ciphersMap = {
  [CA.CAESAR.name + CM.ENCODE]: caesarCipherEncoder,
  [CA.CAESAR.name + CM.DECODE]: caesarCipherDecoder,
  [CA.ROT8.name + CM.ENCODE]: rot8CipherEncoder,
  [CA.ROT8.name + CM.DECODE]: rot8CipherDecoder,
  [CA.ATBASH.name]: atbashCipher,
};

module.exports = ciphersMap;
