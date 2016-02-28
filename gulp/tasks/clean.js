var gulp = require('gulp');
var del = require('del');
var config = require('../config');

module.exports = function clean(cb) {
  del([config.publicAssets], cb());
};
