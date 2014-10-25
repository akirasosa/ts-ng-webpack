var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./build/javascript/todo-entry.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: 'dist/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.woff$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file-loader" },
      { test: /\.eot$/, loader: "file-loader" },
      { test: /\.svg$/, loader: "file-loader" }
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
