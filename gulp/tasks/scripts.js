var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var assignIn = require('lodash.assignin');
var gulpIf = require('gulp-if');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var config = require('../config').scripts;
var bundleConfigs = config.bundleConfigs;
var jshintTask = require('./jshint');
var templatesTask = require('./templates');
var merge = require('merge-stream');

module.exports = function scripts(cb, devMode) {

  jshintTask();
  templatesTask();

  if (devMode) {
    assignIn(bundleConfigs, watchify.args, { debug: true });
  }

  var b = browserify(bundleConfigs);

  var bundle = function () {

    console.log('Bundling ' + bundleConfigs.outputName);

    return b
      .bundle()
      .pipe(source(bundleConfigs.outputName))
      .pipe(buffer())
        .pipe(gulpIf(!devMode, uglify()))
      .pipe(gulp.dest(bundleConfigs.dest))
      .pipe(browserSync.reload({ stream: true }));
  };

  if (devMode) {
    b = watchify(b);
    b.on('update', bundle);
  }

  return bundle();
};
