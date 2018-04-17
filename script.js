

var app = angular.module('website', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html'
    })
    .when('/about', {
      templateUrl: 'about.html'
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

