var path = require("path");
var webpack = require("webpack");
var config = require("./config");

module.exports = {
  entry: {
    app1: "./build/javascript/app1-entry.js",
    app2: "./build/javascript/app2-entry.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: config.dev.publicPath,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jpg$/, loader: "url-loader?limit=10000" },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.woff$/, loader: "url-loader?limit=25000&mimetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file-loader" },
      { test: /\.eot$/, loader: "file-loader" },
      { test: /\.svg$/, loader: "file-loader" },
      { test: /\.html$/, loader: "ng-cache?prefix=[dir]" }
    ]
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".coffee"],
    modulesDirectories: ['bower_components', 'node_modules']
  },
  cache: true,
  plugins: [
    new webpack.ProvidePlugin({}),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
};
