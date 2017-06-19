var app = angular.module('testapp', [ 'ngRoute' ]).config(
		[ '$routeProvider', function($routeProvider) {
//			alert($routeProvider)
			$routeProvider.when('/home', {
				templateUrl : "../views/home.html",
				controller : 'HomeController'
			}).when('/expression', {
				templateUrl : "../views/expression.html",
				controller : 'ExpressionController'
			}).when('/other1', {
				templateUrl : "../views/other.html",
				controller : 'OtherController'
			}).when('/other2', {
				template : 'other2 page'
			}).otherwise({
				redirectTo : '/'
			});
		} ]);

//app.config(['$locationProvider', function($locationProvider) {
//	  $locationProvider.hashPrefix('');
//	}]);