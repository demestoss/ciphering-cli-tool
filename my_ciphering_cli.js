const configureProcessStream = require("./src/config/configureProcessStream");
const createCipheringCli = require("./src/cli/createCipheringCli");
const runCipheringProcess = require("./src/services/runCipheringProcess");

configureProcessStream();

const cipheringCli = createCipheringCli();
cipheringCli.parse(process.argv);
const options = cipheringCli.opts();
runCipheringProcess(options);
