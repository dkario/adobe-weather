var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var config = require('../config').templates;

module.exports = function templates() {
  return gulp.src(config.src)
    .pipe(templateCache(config.templateCacheOptions))
    .pipe(gulp.dest(config.dest));
};
