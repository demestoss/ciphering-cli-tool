const CipheringAlgorithms = Object.freeze({
  CAESAR: {
    name: "C",
  },
  ROT8: {
    name: "R",
  },
  ATBASH: {
    name: "A",
    mono: true,
  },
});

const CipheringMode = Object.freeze({
  ENCODE: 1,
  DECODE: 0,
});

module.exports = {
  CipheringAlgorithms,
  CipheringMode,
};
