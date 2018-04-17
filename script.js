var app = angular.module('website', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html'
    })
    .when('/cast', {
      templateUrl: 'cast.html'
    })
    .when('/episodes', {
      templateUrl: 'episodes.html'
    })
    .otherwise( {
      redirectTo: '/home'
    });
}])

app.controller('main-controller', ['$scope', function($scope){
}]);

$('#brandon-txt').load("text/brandon.txt");
$('#jake-txt').load("text/jake.txt");
$('#sam-txt').load("text/sam.txt");
$('#chelsea-txt').load("text/chelsea.txt");
