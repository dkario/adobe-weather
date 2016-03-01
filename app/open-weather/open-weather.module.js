module.exports = [
  '$http',
  '$filter',
  function ($http, $filter) {

    return {
      getWeather: function (city, country) {
        var url = getQueryUrl(city, country);

        return $http.get(url)
          .then(function (res) {
            return {
              currentWeather: res.data.weather[0].main,
              lastReading: formatDate(new Date()),
              temperature: formatTemperature(res.data.main.temp),
              humidity: formatHumidity(res.data.main.humidity),
              sunrise: formatDate(res.data.sys.sunrise),
              sunset: formatDate(res.data.sys.sunset)
            };
          }, function (res) {
            console.log('service error');
            console.log(res.status);
            console.log(res.statusText);
          });
      }
    };

    function getQueryUrl(city, country) {
      var urlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
      var apiKey = 'd28f5a35ca3977b95c5ab244addbda38';
      var urlSuffix = '&appid=' + apiKey;
      return urlBase + getLocationString(city, country) + urlSuffix;
    }

    function formatDate(date) {
      // If date is UNIX timestamp, convert to ms.
      if (Number.isInteger(date)) {
        date *= 1000;
      }
      var dateFormat = 'h:mm:ss a';
      return $filter('date')(date, dateFormat);
    }

    function formatTemperature(kelvin) {
      // Convert from Kelvin to Farenheit.
      return Math.round((9 / 5) * (kelvin - 273) + 32) + ' F';
    }

    function formatHumidity(humidity) {
      return humidity + '%';
    }

    function getLocationString(city, country) {
      // Ex: 'New York' and 'USA' -> 'newyork,usa
      return normalize(city) + ',' + normalize(country);
    }

    function normalize(str) {
      return str.replace(/\s+/g, '').toLowerCase();
    }
  }
];
