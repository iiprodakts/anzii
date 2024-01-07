export default function (api) {
	api.cache(true);
	//api.assertVersion("^7.4.5");

	const presets = [
		[
			"@babel/preset-env",
			{
				targets: {
					esmodules: true,
					node: true,
				},
			},
		],
	];
	//const plugins = [
	// ["@babel/plugin-transform-modules-commonjs"],
	// ["@babel/plugin-transform-destructuring"],
	// ["@babel/plugin-proposal-class-properties"],
	// [
	// 	"@babel/plugin-proposal-decorators",
	// 	{
	// 		decoratorsBeforeExport: true,
	// 	},
	// ],
	// ["@babel/plugin-proposal-export-default-from"],
	// ["@babel/plugin-proposal-export-namespace-from"],
	// ["@babel/plugin-proposal-object-rest-spread"],
	// ["@babel/plugin-transform-template-literals"],
	// ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }],
	// ["@babel/plugin-transform-runtime"],
	// ["@babel/plugin-transform-classes"],
	//];

	return {
		presets,
		//plugins,
	};
}
