var gulp = require("gulp");

gulp.task('compile', [
  'jade',
  'typescript',
  'coffee',
  'javascript',
  'stylus',
  'images'
]);

