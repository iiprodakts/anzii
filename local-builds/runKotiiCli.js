const createTarball = require("./createTarball");
const parseContextArguments = require("./parseContextArguments");
const runNodeScript = require("./runNodeScript");
const path = require("path");
const parseScriptArguments = require("./parseScriptArguments");

const scriptPath = __dirname;
const contextScriptRoot = path.join(scriptPath, "..");
//const workingDir = process.cwd();
const packagesPath = path.join(contextScriptRoot, "packages");
const kotiiScriptsPath = path.join(packagesPath, "kotii-scripts");
console.log("Packages PATH", kotiiScriptsPath);
const madeTarball = createTarball(kotiiScriptsPath, "kotii-scripts");
const nodeScriptPath = path.join(packagesPath, "kotii-cli");
runNodeScript(
  nodeScriptPath,
  "app.js",
  contextScriptRoot,
  [parseScriptArguments(), madeTarball, parseContextArguments()],
  path.join(kotiiScriptsPath, madeTarball)
);
// console.log("Made TARBALL", madeTarball);
// console.log("CONTEXT ARGUMENTS", parseContextArguments());
// console.log("WORKING DIR", process.cwd());
// console.log("path_dirname", __dirname);
// console.log("path.join", path.join(__dirname, ".."));
// console.log("THE REAL PATH ", path.join(process.cwd()));
//createTarball();
