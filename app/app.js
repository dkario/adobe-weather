var angular = require('angular');

// Routes
var routes = require('./routes');

// UI Router
require('angular-ui-router');

// Cached templates
require('./templates/templates');

// Angular modules
require('./main/main.module');
require('./404/404.module');

var adobeWeather = angular.module('adobeWeather', [
  'ui.router',
  'templates',

  // Angular modules
  'main',
  '404'
])
.config(routes);
