var app = angular.module('loginApp', ['ngCookies']);

app.controller('loginController',  ['$scope', '$http','$cookies', function($scope, $http, $cookies) {
var loadingError = "Ошибка загрузки. Перезагрузите страницу!";
    // POST METHOD.... Checking if the login is successfull
    $scope.doLogin = function() {
        $http.post("http://localhost:8080/user/login", JSON.stringify($scope.loginData))
          .then(function (result) {
			console.log($cookies.get('X-Auth-Token'));
			$cookies.put('X-Auth-Token', result.data.authToken);
            console.log(result);
			//window.location.href='/main.html';
        }, function (error) {
             console.log(error);
        });
    };
}]);

app.controller("remindController", function($scope, $http) {

});

app.controller("registerController", function($scope, $http) {
$scope.register = function() {
        $http.post("http://localhost:8080/user/register", JSON.stringify($scope.registerData))
          .then(function (result) {
            console.log(result);
			//window.location.href='/main.html';
        }, function (error) {
            console.log(error);
        });
    };
});
