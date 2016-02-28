var gulp = require('gulp');
var styles = require('./styles');
var html = require('./html');
var watch = require('./watch');
var watchify = require('./watchify');
var browserSync = require('./browserSync');

gulp.task('default', gulp.parallel(
  styles,
  html,
  watch,
  watchify,
  browserSync
));
