var gulp = require("gulp");

gulp.task('watch', ['template', 'typescript', 'coffee', 'stylus', 'images'], function() {
  gulp.watch('src/javascript/**/*.jade', ['template']);
  gulp.watch('src/javascript/**/*.ts', ['typescript', 'tslint']);
  gulp.watch('src/javascript/**/*.coffee', ['coffee']);
  gulp.watch('src/css/**/*.styl', ['stylus']);
  gulp.watch('src/images/**/*', ['images']);
});
