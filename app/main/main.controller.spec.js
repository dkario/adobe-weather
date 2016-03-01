describe('Main Controller', function () {

  beforeEach(angular.mock.module('adobeWeather'));

  var $controller;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('should have test of 1', function () {
    var $scope = {};
    var controller = $controller('MainController', { $scope: $scope });

    expect($scope.test).toEqual(1);
  });
});
