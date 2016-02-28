angular.module('404', [])
.config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider
    .state('404', {
      url: '/404',
      templateUrl: '404.template.html',
    });
  },
]);
