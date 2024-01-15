import runNpmScript from "./runNpmScript.js";

describe("Test local publish and installation of anzii to dependent packages", () => {
	test("Should publish anzii with yalc, and install to dependent packages", async () => {
		expect(
			await runNpmScript(
				"run",
				`--prefix ${process.cwd()} local:publish`,
				"",
				process.cwd(),
			),
		).toBeTruthy();
	}, 600000);
});
