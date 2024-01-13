import chalk from "chalk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import createTarball from "./createTarball.js";
import parseScriptArguments from "./parseScriptArguments.js";
import runNpmScript from "./runNpmScript.js";

const dependecies = ["cjs-demo", "mjs-demo"];
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
const install = possibleArgs[1];
const shouldInstallOnDeps = install && install === "install" ? true : false;
const packagesPath = path.join(contextScriptRoot, "packages");
const toBeTarballedPath = path.join(packagesPath, tarballPackageName);
console.log("PackageToBeTarballed", toBeTarballedPath);
const madeTarball = createTarball(toBeTarballedPath, tarballPackageName);
if (shouldInstallOnDeps) {
	chalk.green.bold(
		console.info("A tarball package of anzii has successfully been created"),
	);
	chalk.green.bold(
		console.info("System will install tarball package on dependecies next"),
	);
	dependecies.forEach(async (dep) => {
		let packagePath = `${path.join(
			process.cwd(),
			`packages/${dep}/package.json`,
		)}`;
		let packageJSON = JSON.parse(
			fs.readFileSync(packagePath, { encoding: "utf-8" }),
		);

		let packageJSONScripts = packageJSON.scripts;

		packageJSONScripts = {
			...packageJSONScripts,
			installTarball: `npm i file:../anzii/${madeTarball}`,
		};

		packageJSON = { ...packageJSON, scripts: { ...packageJSONScripts } };
		fs.writeFileSync(`${packagePath}`, JSON.stringify(packageJSON, null, 2));
		let runResult = await runNpmScript(
			"run",
			`--prefix ${path.join(process.cwd(), `packages/${dep}`)} installTarball`,
			"",
			process.cwd(),
		);
		if (runResult) {
			chalk.cyanBright.bold(
				console.info(
					`Tarball package has successfully been installed on package ${dep}`,
				),
			);
		} else {
			chalk.redBright.bold(
				console.info(
					"Tarball package could not be installed. An error occured:",
					runResult,
				),
			);
		}
	});
	console.log("madeTARBALL", madeTarball);
}

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
