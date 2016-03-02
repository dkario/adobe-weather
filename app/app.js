var angular = require('angular');

// Routes
var routes = require('./routes');

// UI Router
require('angular-ui-router');

// Cached templates
require('./templates/templates');

// Angular modules
require('./home/home.module');
require('./weather/weather.module');

var adobeWeather = angular.module('adobeWeather', [
  'ui.router',
  'templates',

  // Angular modules
  'home',
  'weather'
])
.config(routes);

// Services
adobeWeather.factory('openWeather', require('./open-weather/open-weather.module'));
