import path from "path";
import runNpmScript from "./runNpmScript.js";
export default async function (packageName) {
	let runResult = await runNpmScript(
		"run",
		`--prefix ${path.join(
			process.cwd(),
			`packages/${packageName}`,
		)} yalc:push:publish`,
		"",
		process.cwd(),
	);
	return runResult;
}
