const ciphersMap = require("./ciphersMap");

const validateCipher = (cipher) =>
  Object.keys(ciphersMap).includes(cipher);

const validateConfig = (config) => {
  const ciphers = config.split("-");

  return (
    ciphers.length > 0 && ciphers.every(validateCipher)
  );
};

module.exports = validateConfig;
