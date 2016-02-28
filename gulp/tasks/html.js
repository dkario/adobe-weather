var gulp = require('gulp');
var browserSync  = require('browser-sync');
var config = require('../config').html;

module.exports = function html() {
  return gulp.src(config.src)
		.pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());
};
