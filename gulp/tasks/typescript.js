var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject({
  declarationFiles: true,
  noExternalResolve: false,
  module: 'commonjs'
});

gulp.task('typescript', function() {
  var tsResult = gulp.src('src/javascript/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/javascript'));
});
