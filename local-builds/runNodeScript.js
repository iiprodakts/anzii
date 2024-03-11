import { execSync } from "child_process";
import path from "path";
export default function (
	scriptPath,
	fileToRun,
	fromContext,
	options,
	scriptsPath,
) {
	let optionsValue = options[0][0] ? options[0] : "";
	console.log("options value", optionsValue);
	console.log("THE SCRIPTS PATH", scriptsPath);

	let commandToRun = `node ${path.join(scriptPath, fileToRun)} ${optionsValue
		.toString()
		.replace(/,/g, " ")} --local-scripts ${scriptsPath}`;
	console.log("COMMAND TO RUN", commandToRun);
	execSync(`${commandToRun}`, { cwd: fromContext, stdio: "inherit" });
}
