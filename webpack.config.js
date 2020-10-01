
var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals') 
const FileManagerPlugin = require('filemanager-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


// const NodemonPlugin = require('nodemon-webpack-plugin') 
const root = path.resolve(__dirname)

console.log('THE ROOT IN WEBPACK')
console.log(root)




var anzii = {

  
  entry: ["@babel/polyfill",'./lib/start'],
  target: 'node',
  externals: [
    { express: 'commonjs express' },
  nodeExternals({
    modulesDir: path.resolve(__dirname, './node_modules'),
    allowlist: ['webpack/hot/poll?1000']
}),
nodeExternals({
    modulesDir: path.resolve(__dirname, './node_modules'),
    allowlist: ['webpack/hot/poll?1000']
})],
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
              { source:  path.resolve(__dirname, 'dist','index.js'), destination: path.resolve(__dirname, 'lib','index.js') },
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
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  }

 
}


// var le = {

//   mode: 'development',
//   entry: ["@babel/polyfill",'./list/index'],
//   target: 'node',
//   externals: [
//     { express: 'commonjs express' },
//   nodeExternals({
//     modulesDir: path.resolve(__dirname, './node_modules'),
//     whitelist: ['webpack/hot/poll?1000']
// }),
// nodeExternals({
//     modulesDir: path.resolve(__dirname, './node_modules'),
//     whitelist: ['webpack/hot/poll?1000']
// })],
//   output: {
//     path: path.resolve('list'),
//     filename: 'le.js',
//     libraryTarget: 'commonjs2'
//   },
//   module: {
//     rules: [
//       { 
//         test: /\.(js)$/, 
//         use: 'babel-loader',
       
//       }
//     ]
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       __isBrowser__: "false"
//     })
//   ]
// }


// var le2 = {

//   mode: 'development',
//   entry: ["@babel/polyfill",'./list2/index'],
//   target: 'node',
//   externals: [
//     { express: 'commonjs express' },
//   nodeExternals({
//     modulesDir: path.resolve(__dirname, './node_modules'),
//     whitelist: ['webpack/hot/poll?1000']
// }),
// nodeExternals({
//     modulesDir: path.resolve(__dirname, './node_modules'),
//     whitelist: ['webpack/hot/poll?1000']
// })],
//   output: {
//     path: path.resolve('list2'),
//     filename: 'le.js',
//     libraryTarget: 'commonjs2'
//   },
//   module: {
//     rules: [
//       { 
//         test: /\.(js)$/, 
//         use: 'babel-loader',
       
//       }
//     ]
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       __isBrowser__: "false"
//     })
//   ]
// }







module.exports = [anzii]