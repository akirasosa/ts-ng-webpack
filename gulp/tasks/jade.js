var gulp = require("gulp");
var jade = require('gulp-jade');
//var templateCache = require('gulp-angular-templatecache');

gulp.task('jade', function () {
  gulp.src('src/javascript/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('build/javascript'));
});
