const path = require("path");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

plugins: [
  new BundleAnalyzerPlugin()
],


module.exports = {
  entry: "./frontend/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "frontend"),
    },
    compress: true,
    port: 5501,
    open: true,
    hot: true,
  },
};
