var bs = require('browser-sync');
var gulp = require('gulp');
var config = require('../config').browserSync;

module.exports = function browserSync() {
  bs(config);
};
