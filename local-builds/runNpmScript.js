import chalk from "chalk";
import { exec } from "child_process";
export default function (
	npmCommand = "run",
	scriptToRun = "tarball",
	options = "",
	cwd = process.cwd(),
) {
	return new Promise((resolve, reject) => {
		let commandToRun = `npm ${npmCommand} ${scriptToRun} ${options.toString}`;
		exec(`${commandToRun}`, { stdio: "inherit", cwd: cwd }, (err) => {
			if (err)
				console.log(chalk.redBright.bold("Tarball Creation Test Error:"), err);
			if (err) reject(false);
			resolve(true);
		});
	});
}
