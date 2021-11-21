const calcNegativeShiftedLetter = (shift, alphabet) => {
  const alphabetLetterCount = alphabet.length;

  const isOutOfRange = (idx) =>
    -(idx + shift) > alphabetLetterCount;

  const shiftIndexByAlphabetLength = (idx) =>
    idx + alphabetLetterCount;

  const getShiftedLetter = (idx) =>
    alphabet.slice(idx + shift)[0];

  const calcShiftedLetterByIndex = (idx) =>
    isOutOfRange(idx)
      ? calcShiftedLetterByIndex(
          shiftIndexByAlphabetLength(idx)
        )
      : getShiftedLetter(idx);

  return calcShiftedLetterByIndex;
};

module.exports = calcNegativeShiftedLetter;
