var gulp = require('gulp');
var coffee = require('gulp-coffee');
var gulpif = require('gulp-if');
var espower = require("gulp-espower");
var sourcemaps = require('gulp-sourcemaps');
var changed = require('gulp-changed');
var handleErrors = require('../util/handleErrors');

var isTestFile = function(file) {
  return /_test\.js/.test(file.path)
}

gulp.task('coffee', function() {
  var dest = 'build/javascript';

  return gulp.src('src/javascript/**/*.coffee')
    .pipe(changed(dest, {extension: '.js'}))
    .pipe(sourcemaps.init())
    .pipe(coffee({bare: true}))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulpif(isTestFile, espower()))
    .pipe(gulp.dest(dest));
});

