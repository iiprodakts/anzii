const childProcess = require("child_process");
module.exports = function (tarballContext = null) {
  let commandToRun = `npm pack`;
  let currentWorkingDirectory = tarballContext ? tarballContext : process.cwd();
  let createdTarPath = childProcess
    .execSync(`${commandToRun}`, {
      cwd: `${currentWorkingDirectory}`,
    })
    .toString()
    .trim();
  return createdTarPath;
};
