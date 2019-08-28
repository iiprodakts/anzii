

const path = require('path');


let client = {

      mode: 'development',
      entry: './client/client.js',
      output: {

          path: path.resolve(__dirname,'./public'),
          filename: 'sana.bundle.js'

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


let server = {

    mode: 'development',
    entry: './server/serverdev.js',
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

let sana = {

    mode: 'development',
    entry: './server/serverdev.js',
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

module.exports = [client, server]