export default {
	moduleFileExtensions: ["js", "jsx", "json", "png", "md", "html"],
	transform: {},
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md|html)$":
			"<rootDir>/assetsTransformer.js",
		"\\.(css|less)$": "<rootDir>/assetsTransformer.js",
	},
	collectCoverage: false,
	collectCoverageFrom: ["lib/**/*.{js,jsx}"],
	coverageDirectory: "coverage",
	testEnvironment: "node",
};
