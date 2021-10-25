const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "./",
    chunkFilename: "js/[name].js",
  },
  devtool: "inline-source-map",
  mode: "development",
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  devServer: {
    static: "./dist",
    client: {
      progress: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
        BASE_URL: '"/"',
      },
    }),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "管理输出",
      template: "public/index.html",
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "dist"),
          toType: "dir",
          noErrorOnMissing: true,
          globOptions: {
            ignore: [path.resolve(__dirname, "public/index.html")],
          },
          info: {
            minimized: true,
          },
        },
      ],
    }),
  ],
};
