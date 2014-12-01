var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject({
  declarationFiles: true,
  noExternalResolve: false,
  module: 'commonjs'
});

gulp.task('typescript', function() {
  var tsResult = gulp.src('src/javascript/**/*.ts')
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(gulp.dest('build/javascript'));
});
