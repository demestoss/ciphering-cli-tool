const proceed = require("./proceed");
const genShiftedLetterCallback = require("./utils/genShiftedLetterCallback");
const { DEFAULT_ALPHABET } = require("./constants");

const genericCaesarCipherService = ({
  shift = 1,
  alphabet = DEFAULT_ALPHABET,
}) => {
  const encode = (string) => {
    const getShiftedLetter = genShiftedLetterCallback(
      alphabet,
      shift
    );

    return proceed({ string, alphabet, getShiftedLetter });
  };

  const decode = (string) => {
    const getShiftedLetter = genShiftedLetterCallback(
      alphabet,
      -shift
    );

    return proceed({ string, alphabet, getShiftedLetter });
  };

  return {
    encode,
    decode,
  };
};

module.exports = genericCaesarCipherService;
