const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    elementCreate: "./src/elementCreate.js",
    task: "./src/task.js",
    projects: "./src/projects.js",
    utils: "./src/utils.js",
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "To-Do List",
      minify: false,
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
