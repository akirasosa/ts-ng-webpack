var path = require("path");
var webpack = require("webpack");
var config = require("./config");

module.exports = {
  entry: {
    "todo-sample": "./build/javascript/todo-sample-entry.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: config.dev.publicPath,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.png$/, loader: "url-loader?limit=10000" },
      { test: /\.woff2?$/, loader: "url-loader?limit=25000&mimetype=application/font-woff" },
      { test: /\.ttf$/, loader: "url-loader?limit=50000&mimetype=application/font-ttf" },
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
