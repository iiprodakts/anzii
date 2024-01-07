import runNpmScript from "./runNpmScript.js";

describe("Test shell scripting semulation", () => {
	test("Should createTarball successfull for a give package", async () => {
		expect(await runNpmScript()).toBeTruthy();
	});
});
