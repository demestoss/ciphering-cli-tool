const simplifyConfig = require("../cipheringConfig/simplifyConfig");
const ciphersMap = require("../cipheringConfig/ciphersMap");

const transformToCipher = (configArr) =>
  configArr.map((config) => ciphersMap[config]);

const genCipheringArray = (config) =>
  transformToCipher(simplifyConfig(config.split("-")));

module.exports = genCipheringArray;
