describe('frontend app', function () {

  beforeEach(module('frontendControllers'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('controller', function () {
		it('should have testcase = true', function () {
			var $scope = {};
			var controller = $controller('frontendCtrl', { $scope: $scope });
			expect($scope.testcase).toBe(true);
		});	
	});

/*
  describe('json', function () {
		it('should read JSON data', function () {
			var $scope = {};
			var controller = $controller('frontendCtrl', { $scope: $scope });
			expect($scope.data.postalcode).toBe("XYZ");
		});	
	});
*/

});