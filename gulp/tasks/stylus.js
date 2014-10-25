var gulp = require('gulp');
var stylus = require('gulp-stylus');
var handleErrors = require('../util/handleErrors');

gulp.task('stylus', function() {
  return gulp.src('src/css/**/*.styl')
    .pipe(stylus())
    .on('error', handleErrors)
    .pipe(gulp.dest('build/css'));
});
