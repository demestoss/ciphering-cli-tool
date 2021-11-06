const simplifyConfig = require("./simplifyConfig");

const transformToCipher = (configArr, ciphersMap) =>
  configArr.map((config) => ciphersMap[config]);

const genCipheringArray = (config, ciphersMap) =>
  transformToCipher(
    simplifyConfig(config.split("-")),
    ciphersMap
  );

module.exports = genCipheringArray;
