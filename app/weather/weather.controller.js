module.exports = [
  '$scope',
  '$filter',
  'openWeather',
  function ($scope, $filter, openWeather) {

    $scope.submit = function () {
      openWeather.getWeather($scope.city, $scope.country)
        .then(function (data) {
          $scope.weatherData = data;
        }, function (data) {
          $scope.weatherData = data;
        });
    };

    $scope.init = function () {
      $scope.city = '';
      $scope.country = '';
      $scope.weatherData = null;
    };

    $scope.init();
  }
];
