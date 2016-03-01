var angular = require('angular');

// Routes
var routes = require('./routes');

// UI Router
require('angular-ui-router');

// Cached templates
require('./templates/templates');

// Angular modules
require('./main/main.module');
require('./home/home.module');
require('./weather/weather.module');
require('./404/404.module');

var adobeWeather = angular.module('adobeWeather', [
  'ui.router',
  'templates',

  // Angular modules
  'main',
  'home',
  'weather',
  '404'
])
.config(routes);

adobeWeather.factory('openWeather', require('./open-weather/open-weather.module'));
