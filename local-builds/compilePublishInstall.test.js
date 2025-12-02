import runNpmScript from "./runNpmScript.js";

describe("Test local compile,publish, and installation", () => {
	test("Should compile and publish anzii with yalc, and install to dependent packages", async () => {
		expect(
			await runNpmScript(
				"run",
				`--prefix ${process.cwd()} local:co:pub:in`,
				"",
				process.cwd(),
			),
		).toBeTruthy();
	}, 60000);
});
