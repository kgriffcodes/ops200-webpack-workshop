const path = require('path');

module.exports = {
  mode: 'none',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

