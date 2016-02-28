var gulp = require('gulp');
var templates = require('./templates');
var styles = require('./styles');
var html = require('./html');
var config = require('../config');

module.exports = function watch() {
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
  gulp.watch(config.templates.src, templates);
  gulp.watch(config.styles.src, styles);
  gulp.watch(config.html.src, html);
};
