'use strict';

let path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname + '/src/js/main.js'),
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  devtool: "source-map",
  watch: true,

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }
};
