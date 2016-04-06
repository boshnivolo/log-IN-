var LoginTest = angular.module('LoginTest', []);

LoginTest.controller('LoginController', ['$scope', '$http', function($scope, $http){

  // Create a scope for a user
  $scope.user = {
    email = '',
    password = ''
  };

  $scope.login = function(user){
    // $http goes here in order to check against existing user credentials
  }

  console.log("YO");
}]);
