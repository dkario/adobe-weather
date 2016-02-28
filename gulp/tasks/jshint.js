var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config = require('../config').scripts.jshint;

module.exports = function hint() {
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
};
