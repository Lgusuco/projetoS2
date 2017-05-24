angular.module('s2Project').config(function($routeProvider) {
	$routeProvider

	.when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'homeCtrl'
	})

	.otherwise({redirectTo: '/home'});

});