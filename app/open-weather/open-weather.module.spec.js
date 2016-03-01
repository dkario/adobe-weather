describe('Open Weather service', function () {

  beforeEach(angular.mock.module('adobeWeather'));

  var openWeather;
  var $httpBackend;

  beforeEach(inject(function (_openWeather_, _$httpBackend_) {
    openWeather = _openWeather_;
    $httpBackend = _$httpBackend_;
  }));

  describe('getWeather()', function () {

    beforeEach(function () {
      this.weatherData = {
        cod: 200,
        main: {
          temp: 285,
          humidity: 50
        },
        sys: {
          sunrise: 1456831682,
          sunset: 1456854504,
        },
        weather: [{
          main: 'Clouds'
        }]
      };

      this.getQueryUrl = function (locationString) {
        var urlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
        var apiKey = 'd28f5a35ca3977b95c5ab244addbda38';
        var urlSuffix = '&appid=' + apiKey;

        return urlBase + locationString + urlSuffix;
      };
    });

    it('should retrieve the weather of a valid city and country', function () {

      $httpBackend.expectGET(this.getQueryUrl('newyork,usa'))
        .respond(this.weatherData);

      openWeather.getWeather('New York', 'USA')
        .then(function (data) {
          expect(data.currentWeather).toBe('Clouds');
          expect(data.temperature).toEqual('54 F');
          expect(data.humidity).toEqual('50%');
          expect(data.sunrise).toEqual('6:28:02 AM');
          expect(data.sunset).toEqual('12:48:24 PM');
        });

      $httpBackend.flush();
    });

    it('should return the error from Open Weather on invalid input', function () {

      var errorData = {
        cod: '404',
        message: 'Error: Not found city'
      };

      $httpBackend.expectGET(this.getQueryUrl('koajfwe,jjk'))
        .respond(errorData);

      openWeather.getWeather('koajfwe', 'JJK')
        .then(function (data) {
          expect(data.errorMessage).toEqual('Error: Not found city');
        });

      $httpBackend.flush();
    });

    it('should return a custom error if the Open Weather API call errors', function () {

      $httpBackend.expectGET(this.getQueryUrl('newyork,usa'))
        .respond(500);

      openWeather.getWeather('New York', 'USA')
        .then(null, function (data, status) {
          expect(data.errorMessage).toEqual('Sorry!');
        });

      $httpBackend.flush();
    });
  });
});
