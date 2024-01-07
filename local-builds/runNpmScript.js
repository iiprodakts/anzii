import { exec } from "child_process";
export default function () {
	return new Promise((resolve, reject) => {
		let commandToRun = `npm run tarball anzii`;
		exec(`${commandToRun}`, { stdio: "inherit", cwd: process.cwd() }, (err) => {
			console.log("THE EXEC CALLBACK", err);
			if (err) reject(false);
			resolve(true);
		});
	});
}
