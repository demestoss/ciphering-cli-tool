const {
  caesarCipher,
  rot8Cipher,
  atbashCipher,
} = require("../../../../packages/ciphers");
const {
  CipheringAlgorithms: CA,
  CipheringMode: CM,
} = require("./constants");

const ciphersMap = {
  [CA.CAESAR.name + CM.ENCODE]: caesarCipher.encode,
  [CA.CAESAR.name + CM.DECODE]: caesarCipher.decode,
  [CA.ROT8.name + CM.ENCODE]: rot8Cipher.encode,
  [CA.ROT8.name + CM.DECODE]: rot8Cipher.decode,
  [CA.ATBASH.name]: atbashCipher,
};

module.exports = ciphersMap;
