var app = angular.module('app', ['ui.router'])

	.config(['$stateProvider', '$urlRouterProvider', 
		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');
			
			$stateProvider
				.state('koala', {
					url: "/",
					templateUrl: "views/koala.html"
				})
				.state('canguro', {
					url: "/canguro",
					templateUrl: "views/canguro.html"
				})
		}
	]);