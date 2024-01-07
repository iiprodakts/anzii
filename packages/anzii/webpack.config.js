import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("Webpack dir name", __dirname);
console.log("webpack path", path.resolve(__dirname, "node_modules"));
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//const rootPath = path.resolve(__dirname);
var front = {
	entry: "./lib/start.js",
	target: "node13.14",
	mode: "development",
	experiments: {
		outputModule: true,
	},
	//devtool: "inline-source-map",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "index.cjs",
		library: {
			type: "module",
		},
	},
	externals: [
		nodeExternals({
			modulesDir: path.resolve(__dirname, "node_modules"),
		}),
		nodeExternals({
			modulesDir:
				"/Users/surprisemashele/Documents/Development/frameworks/anzii/node_modules",
		}),
	],
	resolve: {
		extensions: [".js", ".jsx"],
		// alias: {
		//   Config: "/src/config/",
		//   Components: "/src/components/",
		//   HOC: "/src/hoc/",
		//   Hooks: "/src/hooks/index",
		//   Context: "/src/context/",
		//   Utilities: "/src/utils/index",
		//   Constants: "/src/constants/",
		//   Assets: "/src/assets/",
		//   AppGlobals: "/src/globals/index",
		// },
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				// exclude: /node_modules/,
				exclude: [
					path.resolve(__dirname, "node_modules"),
					"/Users/surprisemashele/Documents/Development/frameworks/anzii/node_modules",

					// exception: include these node_modules
					// not: [
					//   // add any node_modules that should be run through babel here
					//   path.resolve(
					//     rootPath,
					//     "node_modules/@MY_ORG/MY_PACKAGE1"
					//   ),
					//   path.resolve(
					//       rootPath,
					//       "node_modules/@MY_ORG/MY_PACKAGE2"
					//   ),
					// ]
				],
				use: ["babel-loader"],
			},
			// {
			//   test: /\.html$/,
			//   use: "html-loader",
			// },
			/*Choose only one of the following two: if you're using 
        plain CSS, use the first one, and if you're using a
        preprocessor, in this case SASS, use the second one*/
			//   {
			//     test: /\.css$/,
			//     use: ["style-loader", "css-loader"],
			//   },
			// {
			//   test: /\.scss$/,
			//   use: ["style-loader", "css-loader", "sass-loader"],
			// },
		],
	},

	// plugins: [
	//   new HTMLWebpackPlugin({
	//     template: __dirname + "/public/index.html",
	//     filename: "index.html",
	//     inject: "body",
	//   }),
	// ],
};
export default front;
