const validateCipher = (ciphersMap) => (cipher) =>
  Object.keys(ciphersMap).includes(cipher);

const validateConfig = (ciphersMap) => (config) => {
  const ciphers = config.split("-");

  return (
    ciphers.length > 0 &&
    ciphers.every(validateCipher(ciphersMap))
  );
};

module.exports = validateConfig;
