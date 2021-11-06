const { pipeline } = require("stream");

const runProcessPipeline = async (
  readStream,
  transformStreams,
  writeStream
) => {
  await pipeline(
    readStream,
    ...transformStreams,
    writeStream,
    (err) => {
      if (err) {
        process.stderr.write("Pipeline failed:", err);
        process.exit(1);
      } else {
        console.log("Ciphering successfully ended");
      }
    }
  );
};

module.exports = runProcessPipeline;
