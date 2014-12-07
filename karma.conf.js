var _ = require("lodash")
var webpackConfig = require("./webpack.config.js");

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ["mocha"],
    files: [
      'build/javascript/**/*_test.js'
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
            exclude: [
              /node_modules\//,
              /bower_components\//,
              /_test.js$/,
              /test-helper.js$/,
              /lb-services.js$/ // generated file
            ],
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
