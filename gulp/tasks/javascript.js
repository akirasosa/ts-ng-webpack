var gulp = require('gulp');

gulp.task('javascript', function() {
  return gulp.src('src/javascript/**/*.js')
    .pipe(gulp.dest('build/javascript'));
});

