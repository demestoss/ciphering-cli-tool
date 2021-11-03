const proceed = require("../genericCaesarCipher/proceed");
const {
  DEFAULT_ALPHABET,
} = require("../genericCaesarCipher/constants");

const genShiftedLetterCallback = (alphabet) => {
  const reversedAlphabet = alphabet
    .split("")
    .reverse()
    .join("");

  return (letter) => {
    const letterIdx = alphabet.indexOf(letter);

    return reversedAlphabet[letterIdx];
  };
};

const atbashCipher = (string) => {
  const alphabet = DEFAULT_ALPHABET;
  const getShiftedLetter =
    genShiftedLetterCallback(alphabet);

  return proceed({ string, alphabet, getShiftedLetter });
};

module.exports = {
  atbashCipher,
};
