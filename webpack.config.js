
var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals') 
const NodemonPlugin = require('nodemon-webpack-plugin') 




var server = {

  entry: ["@babel/polyfill",'./sev'],
  target: 'node',
  externals: [
    { express: 'commonjs express' },
  nodeExternals({
    modulesDir: path.resolve(__dirname, './node_modules'),
    whitelist: ['webpack/hot/poll?1000']
}),
nodeExternals({
    modulesDir: path.resolve(__dirname, './node_modules'),
    whitelist: ['webpack/hot/poll?1000']
})],
  output: {
    path: path.resolve(__dirname),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { 
        test: /\.(js)$/, 
        use: 'babel-loader',
       
        // exclude: [

        //   path.resolve(__dirname, './js/sn')
        // ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}


let dev = {

   
    entry: './server/serverdev.js',
    target: 'node',
    externals: [
      { express: 'commonjs express' },
    ],
    output: {

        path: path.resolve(__dirname,'./server'),
        filename: 'server.js'

    },

    module:{

        rules:[

            {
              use: 'babel-loader',
              test: /\.js$/,
              exclude: /node_modules/

            }

        ]


    }

}

var andziiy = {

    entry: './lib/andziiy',
    target: 'node',
    externals: [
      { express: 'commonjs express' },
    ],
    output: {
      path: path.resolve(__dirname, './lib/an'),
      filename: 'andziiy.js',
      publicPath: '/'
    },
    
    module: {
      rules: [
        { test: /\.(js)$/, use: 'babel-loader' },
      ]
    }
  } 




module.exports = [andziiy,server,dev]