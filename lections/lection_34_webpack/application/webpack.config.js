const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  // entry: './src/index.js',
  entry: {
    main: './index.js',
    widget: './libs/widget.js'
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
        title: 'Webpack study'
      })
  ]
};


module.exports = webpack