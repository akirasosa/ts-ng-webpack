var gulp = require("gulp");
var jade = require('gulp-jade');
var templateCache = require('gulp-angular-templatecache');

gulp.task('template', function () {
  gulp.src('src/javascript/**/*.jade')
    .pipe(jade())
    .pipe(templateCache('templates.js', {standalone: true}))
    .pipe(gulp.dest('build/javascript'));
});
