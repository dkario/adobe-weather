angular.module('weather', [])
.config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider
    .state('weather', {
      url: '/weather',
      views: {
        'title': {
          template: 'Weather'
        },
        'content-body': {
          controller: 'WeatherController',
          templateUrl: 'weather.template.html',
        }
      },
    });
  },
])
.controller('WeatherController', require('./weather.controller.js'));
