var gulp = require("gulp");

gulp.task("build", ['clean', 'template', 'webpack:build']);
