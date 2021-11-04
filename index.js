const configureProcessStream = require("./src/config/configureProcessStream");
const createCipheringCli = require("./src/cli/createCipheringCli");
const {
  caesarCipherEncoder,
  caesarCipherDecoder,
  rot8CipherEncoder,
  rot8CipherDecoder,
  atbashCipher,
} = require("./src/services/ciphers");

configureProcessStream();

const str = "Hello World!";

const arr = [
  caesarCipherEncoder(str),
  caesarCipherDecoder(caesarCipherEncoder(str)),
  rot8CipherEncoder(str),
  rot8CipherDecoder(rot8CipherEncoder(str)),
  atbashCipher(str),
  atbashCipher(atbashCipher(str)),
];

console.log(arr);

const cipheringCli = createCipheringCli();
cipheringCli.parse(process.argv);
console.log(cipheringCli.opts());
