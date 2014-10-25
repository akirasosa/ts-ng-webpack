var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');

gulp.task('images', function() {
  var dest = 'build/images';
  return gulp.src('src/images/**/*')
    .pipe(changed(dest))
    .pipe(imagemin())
    .pipe(gulp.dest(dest));
});
