const configureProcessStream = require("./src/config/configureProcessStream");
const createCipheringCli = require("./src/cli/createCipheringCli");

configureProcessStream();

const cipheringCli = createCipheringCli();
cipheringCli.parse(process.argv);
cipheringCli.proceed();
