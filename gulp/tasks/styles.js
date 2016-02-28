var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var config = require('../config').styles;

module.exports = function styles() {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(concat(config.outputName))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());
};
