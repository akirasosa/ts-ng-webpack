var gulp = require("gulp");

gulp.task('watch', ['compile'], function() {
  gulp.watch('src/javascript/**/*.jade', ['jade']);
  gulp.watch('src/javascript/**/*.ts', ['typescript', 'tslint']);
  gulp.watch('src/javascript/**/*.coffee', ['coffee']);
  gulp.watch('src/css/**/*.styl', ['stylus']);
  gulp.watch('src/images/**/*', ['images']);
});
