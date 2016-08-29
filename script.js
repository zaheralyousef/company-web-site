var app = angular.module('computer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/main', {
            templateUrl: 'src/main.html',
            controller: 'MainController'
        }).
        when('/about', {
            templateUrl: 'src/about.html',
            controller: 'MainController'
        }).
        when('/services', {
            templateUrl: 'src/services.html',
            controller: 'ServicesController'
        }).
        when('/contact', {
            templateUrl: 'src/contact.html',
            controller: 'ContactController'
        }).
        otherwise({redirectTo: '/main'})
    }])
.controller('MainController', ['$scope', '$http', function($scope, $http) {
        $http.get('data/services.json').then(function(response){
        	$scope.services = response.data;
        })
    }])
.controller('ServicesController', ['$scope', '$http', function($scope, $http) {
        $http.get('data/services.json').then(function(response){
        	$scope.services = response.data;
        })
        
    }])
.controller('ContactController', ['$scope', '$http', function($scope, $http) {
        $http.get('data/locations.json').then(function(response){
        	$scope.locations = response.data;
        })
    }]);
