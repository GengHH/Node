
const path = require('path')
//const VuePlugin = require('vue-loader/lib/plugin')

module.exports = {
  // Expose __dirname to allow automatically setting basename.
  context: __dirname,
  node: {
    __dirname: true
  },

  mode: process.env.NODE_ENV || 'development',

  entry: 'loginServer.js',

  output: {
    path: path.join(__dirname, '__build__'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader:'babel-loader',
            // options:{
            //     presets:['@babel/preser-env']
            // }
        }
      }
    ]
  },

  resolve: {},

//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         shared: {
//           name: 'shared',
//           chunks: 'initial',
//           minChunks: 2
//         }
//       }
//     }
//   },

  plugins: []
}