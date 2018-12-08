var app = angular.module('app', ['ui.router'])

	.config(['$stateProvider', '$urlRouterProvider', 
		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/views/404.html');
			
			$stateProvider
    			.state('root',{
    			    views: {
						"topbar": { 
							templateUrl: "views/topbar-home.html" 
						},
						"asideBar": { 
							templateUrl: "views/asidebar-home.html" 
						}
    			}})
				.state('home', {
					url: "/",
					parent: 'root',
					views: {
						"content@": { 
							templateUrl: "views/listTweet-home.html" 
						}
					}
				})
				.state('retweet', {
					url: "/retweet",
					parent: 'root',
					views: {
						"content@": { 
							templateUrl: "views/tweet.html" 
						}
					}
				})
		}
	]);