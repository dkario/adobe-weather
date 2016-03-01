angular.module('home', [])
.config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.template.html',
    });
  },
]);
