var gulp = require('gulp');
var scriptsTask = require('./scripts');

module.exports = function watchify() {
  // Start scripts task with devMode === true
  scriptsTask(null, true);
};
