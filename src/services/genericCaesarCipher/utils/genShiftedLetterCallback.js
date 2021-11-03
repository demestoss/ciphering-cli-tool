const calcPositiveShiftedLetter = require("./calcPositiveShiftedLetter");
const calcNegativeShiftedLetter = require("./calcNegativeShiftedLetter");

const isPositiveShift = (shift) => shift > 0;

const genShiftedLetterCallback = (alphabet, shift) => {
  const correctShift = shift % alphabet.length;
  const getShiftedLetterByIndex = isPositiveShift(
    correctShift
  )
    ? calcPositiveShiftedLetter(correctShift, alphabet)
    : calcNegativeShiftedLetter(correctShift, alphabet);

  return (letter) => {
    const letterIdx = alphabet.indexOf(letter);

    return getShiftedLetterByIndex(letterIdx);
  };
};

module.exports = genShiftedLetterCallback;
