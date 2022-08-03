const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  stats: "errors-only",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
  new HtmlWebpackPlugin({ template: 'src/index.html' }),
  new MiniCssExtractPlugin({

    filename: "styles.css",
    // chunkFilename: "[id].css",
  }),
  new CleanWebpackPlugin(),
],
  devServer: {
    port: 4444,
    open: true,
  },
};
