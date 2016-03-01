module.exports = [
  '$scope',
  'openWeather',
  function ($scope, openWeather) {
    openWeather.getWeather('newyork')
      .then(function (data) {
        $scope.weatherData = data;
      }, function (data) {
        console.log('error');
      });
  }
];
