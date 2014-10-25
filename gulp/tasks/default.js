var gulp = require("gulp");
var async = require("async");

gulp.task('default', function() {
  var tasks = ['clean', 'watch', 'webpack-dev-server'];
  var sync = tasks.map(function(task) {
    return function(callback) {
      gulp.run(task, function(err) {
        callback(err);
      });
    };
  });
  async.series(sync);
});