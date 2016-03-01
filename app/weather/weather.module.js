angular.module('weather', [])
.config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider
    .state('weather', {
      url: '/weather',
      templateUrl: 'weather.template.html'
    });
  },
]);
