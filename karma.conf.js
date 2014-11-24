var _ = require("lodash")
var webpackConfig = require("./webpack.config.js");

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ["mocha"],
    files: [
      "bower_components/angular/angular.js",
      "bower_components/angular-mocks/angular-mocks.js",
      "bower_components/angular-route/angular-route.js",
      'build/javascript/**/*_test.js',
      'build/javascript/templates.js'
    ],
    exclude: [
      'build/javascript/todo-entry.js'
    ],
    preprocessors: {
      'build/javascript/**/*_test.js': ['webpack']
    },
    reporters: ['dots', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    captureTimeout: 60000,
    webpack: _.merge({}, webpackConfig, {
      module: {
        postLoaders: [
          {
            test: /\.js$/,
            exclude: /(test|node_modules|bower_components)\//,
            loader: 'istanbul-instrumenter'
          }
        ]
      }
    }),
    coverageReporter: {
      "reporters": [
        {"type": "html"},
        {"type": "text"}
      ]
    },
    webpackServer: {
      quiet: true
    },
    singleRun: false,
    plugins: [
      "karma-mocha",
      "karma-webpack",
      "karma-coverage",
      "karma-chrome-launcher",
      "karma-phantomjs-launcher"
    ]
  });
};
