import path from "path";
import * as webpack from "webpack";
import nodeExternals from "webpack-node-externals";
import FileManagerPlugin from "filemanager-webpack-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
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
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader',
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        }),
        new FileManagerPlugin({
            onEnd: {
                copy: [
                    { source: path.resolve(__dirname, 'dist', 'index.js'), destination: path.resolve(__dirname, 'lib', 'index.js') },
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
        roots: [root]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
                uglifyOptions: {
                    keep_classnames: false,
                    keep_fnames: false,
                    mangle: true
                }
            })],
    },
    // devtool: "source-map"
};
export default [anzii];
