const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin =  require('eslint-webpack-plugin')

console.log("----------");
console.log(process.env.NODE_ENV, "process.env.NODE_ENV");
console.log("----------");

const isDev = process.env.NODE_ENV === "development";

console.log(isDev, "isDev");

const webpack = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, "src"),

  // entry: './src/index.js',
  entry: {
    main: "./index.js",
    widget: "./libs/widget.js",
  },

  output: {
    // filename: 'bundle.js',
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      title: "Webpack study",
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),

    // new CopyPlugin({
    //   patterns: [{ from: "./assets/config.json" }],
    // }),
    new ESLintPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },

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
        test: /\.(ttf|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },

      {
        test: /\.(xml|json)$/i,
        type: "asset/source",
      },
      
      {
        test: /\.(jpeg|png)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]",
        },
      },
    ],
  },

  optimization: {
    minimizer: [
      // // For webpack@5 you can use the `...` syntax to extend existing minimizers
      "...",
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: "all",
    },
  },

  resolve: {
    extensions: [".js", ".xml", ".json", ".jpeg"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  devServer: {
    port: 3000,
    hot: isDev,
    open: isDev,
    static: {
      directory: "./src",
      watch: isDev,
    },
  },
};

module.exports = webpack;
