const simplifyConfig = require("../../../cli/createCipheringCli/config/simplifyConfig");
const ciphersMap = require("../../../cli/createCipheringCli/config/ciphersMap");

const transformToCipher = (configArr) =>
  configArr.map((config) => ciphersMap[config]);

const genCipheringArray = (config) =>
  transformToCipher(
    simplifyConfig(config.split("-")),
    ciphersMap
  );

module.exports = genCipheringArray;
