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
      $httpBackend.expectGET('http://api.openweathermap.org/data/2.5/weather?q=newyork&appid=d28f5a35ca3977b95c5ab244addbda38')
      .respond({
        main: {
          temp: 285,
          humidity: 50
        },
        sys: {
          sunrise: 1456831682,
          sunset: 1456831682,
        },
        weather: [{
          main: 'Clouds'
        }]
      });
    });

    it('should retrieve the weather when passed in a city', function () {
      openWeather.getWeather('newyork')
        .then(function (data) {
          expect(data.currentWeather).toBe('Clouds');
          expect(data.temperature).toEqual(285);
          expect(data.humidity).toEqual(50);
          expect(data.sunrise).toEqual(1456831682);
          expect(data.sunset).toEqual(1456831682);
        });

      $httpBackend.flush();
    });
  });
});
