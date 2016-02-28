var gulp = require('gulp');
var clean = require('./clean');
var styles = require('./styles');
var scripts = require('./scripts');
var html = require('./html');

gulp.task('build', gulp.series(
  clean,
  gulp.parallel(
    styles,
    html,
    scripts
  )
));
