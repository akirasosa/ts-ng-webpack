var gulp = require('gulp');
var coffee = require('gulp-coffee');
var gulpif = require('gulp-if');
var espower = require("gulp-espower");
var sourcemaps = require('gulp-sourcemaps');

var isTestFile = function(file) {
  return /_test\.js/.test(file.path)
}

gulp.task('coffee', function() {
  return gulp.src('src/javascript/**/*.coffee')
    .pipe(sourcemaps.init())
    .pipe(coffee({bare: true}))
    .pipe(sourcemaps.write())
    .pipe(gulpif(isTestFile, espower()))
    .pipe(gulp.dest('build/javascript'));
});

