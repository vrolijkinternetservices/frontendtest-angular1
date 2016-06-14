(function(angular){
	'use strict';
	
	var frontendApp = angular.module("frontendApp", [
    'frontendControllers'
  ]);

  var frontendControllers = angular.module('frontendControllers', []);

  frontendControllers.controller('frontendCtrl', ['$scope', '$http', function($scope, $http){

    $scope.testcase = true;

    $http.get('data.json').success(function (data){
      $scope.data = data.data;
    });

  }]);

})(angular);