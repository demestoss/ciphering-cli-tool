const runVersionCommand = (programState) => {
  const { version, name } = programState;
  process.stdout.write(`${name} version ${version}`);
  process.exit(0);
};

module.exports = runVersionCommand;
