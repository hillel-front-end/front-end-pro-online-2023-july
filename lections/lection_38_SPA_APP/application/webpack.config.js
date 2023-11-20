const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");


const isDev = process.env.NODE_ENV === "development";


const webpack = {
  mode: process.env.NODE_ENV,
  entry: './index.js',

  output: {
    filename: '[name].[contenthash].js',
    path:  path.resolve(__dirname, 'dist'),
    clean: true
  },

  plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: isDev? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".xml", ".json", ".jpeg"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  devServer: {
    port: 9000,
    hot: isDev,
    open: isDev,
    static: {
      directory: "./src",
      watch: isDev,
    },
    historyApiFallback: true
  },

  devtool: 'source-map'
}


module.exports = webpack;