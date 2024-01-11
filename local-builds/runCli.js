import path from "path";
import { fileURLToPath } from "url";
import createTarball from "./createTarball.js";
import parseScriptArguments from "./parseScriptArguments.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const thisFolder = __dirname;
console.log("scripts path", thisFolder);
const contextScriptRoot = path.resolve(thisFolder, "..");
console.log("THE SCRIPTS PATH", contextScriptRoot);
console.log("PROCESS ARG", parseScriptArguments());
//const workingDir = process.cwd();
const possibleArgs = parseScriptArguments();
if (possibleArgs.length === 0) {
	throw new Error("RUNCLI requires the package name for tarball");
}
const tarballPackageName = possibleArgs[0];
const packagesPath = path.join(contextScriptRoot, "packages");
const toBeTarballedPath = path.join(packagesPath, tarballPackageName);
console.log("PackageToBeTarballed", toBeTarballedPath);
const madeTarball = createTarball(toBeTarballedPath, tarballPackageName);
console.log("madeTARBALL", madeTarball);
// const nodeScriptPath = path.join(packagesPath, "kotii-cli");
// runNodeScript(
// 	nodeScriptPath,
// 	"app.js",
// 	contextScriptRoot,
// 	[parseScriptArguments(), madeTarball, parseContextArguments()],
// 	path.join(toBeTarballedPath, madeTarball),
// );
// console.log("Made TARBALL", madeTarball);
// console.log("CONTEXT ARGUMENTS", parseContextArguments());
// console.log("WORKING DIR", process.cwd());
// console.log("path_dirname", __dirname);
// console.log("path.join", path.join(__dirname, ".."));
// console.log("THE REAL PATH ", path.join(process.cwd()));
//createTarball();
