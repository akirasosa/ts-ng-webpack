var gulp = require("gulp");
var async = require("async");

gulp.task('build', function() {
  var tasks = ['clean', 'compile', 'webpack:build'];
  var sync = tasks.map(function(task) {
    return function(callback) {
      gulp.run(task, function(err) {
        callback(err);
      });
    };
  });
  async.series(sync);
});
