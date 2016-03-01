angular.module('main', [])
.config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'main.template.html',
      controller: 'MainController'
    });
  },
])
.controller('MainController', require('./main.controller.js'));
