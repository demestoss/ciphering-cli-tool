const {
  isUpperCased,
} = require("../../../utils/stringUtils");

const isAlphabeticLetter = (alphabet, letter) =>
  alphabet.includes(letter.toLowerCase());

const proceed = ({ string, alphabet, getShiftedLetter }) =>
  string
    .split("")
    .map((letter) => {
      if (!isAlphabeticLetter(alphabet, letter)) {
        return letter;
      }

      const shiftedLetter = getShiftedLetter(
        letter.toLowerCase()
      );

      return isUpperCased(letter)
        ? shiftedLetter.toUpperCase()
        : shiftedLetter;
    })
    .join("");

module.exports = proceed;
