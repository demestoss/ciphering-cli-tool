const CipheringAlgorithms = Object.freeze({
  CAESAR: "C",
  ROT8: "R",
  ATBASH: "A",
});

const CipheringMode = Object.freeze({
  ENCODE: 1,
  DECODE: 0,
});

module.exports = {
  CipheringAlgorithms,
  CipheringMode,
};
