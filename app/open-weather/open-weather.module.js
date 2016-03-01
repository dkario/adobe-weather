module.exports = [
  '$http',
  function ($http) {
    var apiKey = 'd28f5a35ca3977b95c5ab244addbda38';
    var urlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var urlSuffix = '&appid=' + apiKey;

    return {
      getWeather: function (city, state) {
        city.replace(/\s+/g, '');
        var url = urlBase + city + urlSuffix;

        return $http.get(url)
          .then(function (res) {
            return {
              currentWeather: res.data.weather[0].main,
              temperature: res.data.main.temp,
              humidity: res.data.main.humidity,
              sunrise: res.data.sys.sunrise,
              sunset: res.data.sys.sunrise
            };
          }, function (res) {
            console.log('service error');
            console.log(res.status);
            console.log(res.statusText);
          });
      }
    };
  }
];
