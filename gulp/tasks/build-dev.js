var gulp = require("gulp");

gulp.task("build-dev", ['watch', "webpack:build-dev"], function() {
  gulp.watch(["src/**/*"], ["webpack:build-dev"]);
});
