angular.module('home', [])
.config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      views: {
        'title': {
          template: 'Home'
        },
        'content-body': {
          templateUrl: 'home.template.html',
        }
      }
    });
  },
]);
