angular.module('MVM.services', [])
	.factory('Auth', ["$cookies", "$localStorage","$sessionStorage", AUTHProvider])
	.factory('mvmHttpRequest', ["$http", "$rootScope", mvmHttpRequest]);
