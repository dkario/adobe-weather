var gulp = require('gulp');
var jshint = require('./jshint');
var templates = require('./templates');
var styles = require('./styles');
var html = require('./html');
var config = require('../config');

module.exports = function watch() {
  gulp.watch(config.scripts.jshint.src, jshint);
  gulp.watch(config.templates.src, templates);
  gulp.watch(config.styles.src, styles);
  gulp.watch(config.html.src, html);
};
