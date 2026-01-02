const path = require("path");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

plugins: [new BundleAnalyzerPlugin()],
  (module.exports = {
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
    plugins: [
      new webpack.DefinePlugin({
        __API_BASE_URL__: JSON.stringify(
          process.env.API_BASE_URL || "http://localhost:8000"
        ),
      }),
    ],
  });
