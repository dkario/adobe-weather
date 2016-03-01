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
          templateUrl: 'weather.template.html',
        }
      },
    });
  },
]);
