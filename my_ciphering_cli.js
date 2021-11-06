const configureProcessStream = require("./src/config/configureProcessStream");
const createCipheringCli = require("./src/cli/createCipheringCli");
const runCipheringProcess = require("./src/services/runCipheringProcess");
const ciphersMap = require("./src/config/ciphersConfig/ciphersMap");

configureProcessStream();

const cipheringCli = createCipheringCli(ciphersMap);
cipheringCli.parse(process.argv);
const options = cipheringCli.opts();
runCipheringProcess(options, ciphersMap);
