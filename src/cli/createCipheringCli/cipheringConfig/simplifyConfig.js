const { CipheringAlgorithms: CA } = require("./constants");

const isSameAlgorithm = (current, next) =>
  Object.values(CA).find(
    (algorithm) =>
      current.includes(algorithm.name) &&
      next.includes(algorithm.name)
  );

const isAlgorithmFlagDifferent = (current, next) =>
  current.at(-1) !== next.at(-1);

const isKillEachOther = (current, next) => {
  const algorithm = isSameAlgorithm(current, next);
  if (!algorithm) return false;
  if (algorithm.mono) return true;
  return isAlgorithmFlagDifferent(current, next);
};

const simplifyConfig = (configArr) => {
  for (let i = 0; i < configArr.length; ++i) {
    const current = configArr[i];
    const next = configArr[i + 1];
    if (!next) break;

    if (isKillEachOther(current, next)) {
      return simplifyConfig([
        ...configArr.slice(0, i),
        ...configArr.slice(i + 2),
      ]);
    }
  }
  return configArr;
};

module.exports = simplifyConfig;
