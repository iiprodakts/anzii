import path from "path";
import * as webpacks from "webpack";
import nodeExternals from "webpack-node-externals";
import FileManagerPlugin from "filemanager-webpack-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import { fileURLToPath } from "url";
const webpack = webpacks.default
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("Webpack dir name", __dirname);
console.log("Webpack",webpack)
// import TerserPlugin from "terser-webpack-plugin";
// const NodemonPlugin = require('nodemon-webpack-plugin') 
const root = path.resolve(__dirname);
// console.log('THE ROOT IN WEBPACK')
// console.log(root)
var anzii = {
    entry: ['./lib/start'],
    target: 'node',
    externals: [
        { express: 'commonjs express' },
        nodeExternals({
            modulesDir: path.resolve(__dirname, './node_modules'),
            //allowlist: ['webpack/hot/poll?1000']
        }),
        // nodeExternals({
        //     modulesDir: path.resolve(__dirname, './node_modules'),
        //     allowlist: ['webpack/hot/poll?1000']
        // })
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'index.cjs',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
               
              },
           
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        }),
        new FileManagerPlugin({
            onEnd: {
                copy: [
                    { source: path.resolve(__dirname, 'dist', 'index.cjs'), destination: path.resolve(__dirname, 'lib', 'index.cjs') },
                    // { source:  path.resolve(__dirname, 'dist','index.js.map'), destination: path.resolve(__dirname, 'lib','index.js.map') }
                    // { source: '/path/**/*.js', destination: '/path' },
                    // { source: '/path/fromfile.txt', destination: '/path/tofile.txt' },
                    // { source: '/path/**/*.{html,js}', destination: '/path/to' },
                    // { source: '/path/{file1,file2}.js', destination: '/path/to' },
                    // { source: '/path/file-[hash].js', destination: '/path/to' }
                ]
            }
        })
    ],
    resolve: {
        roots: [root],
        extensions:['.js','.jsx']
    },
    // optimization: {
    //     minimizer: [new UglifyJsPlugin({
    //             uglifyOptions: {
    //                 keep_classnames: false,
    //                 keep_fnames: false,
    //                 mangle: true
    //             }
    //         })],
    // },
    // devtool: "source-map"
};
export default [anzii];
