angular.module('MVM.controller', [])
	.constant('progressConfig', {
		animate: true,
		max: 100
	})
	.controller("ApplicationController", ["$scope", "$http", "$location", "$timeout", "$rootScope","$localStorage","$sessionStorage", ApplicationController])
	.controller("HomeController", ["$scope", "mvmHttpRequest", HomeController])
	.controller("PaymentController", ["$scope", "mvmHttpRequest", "$filter","$localStorage", PaymentController])
	.controller("RegisterController", ["$scope","mvmHttpRequest", "$http","$localStorage","$filter", RegisterController])
	.controller("ProgressController", ['$scope', '$attrs', 'progressConfig', ProgressController])
	.controller("DeviceController", ["$scope", "mvmHttpRequest", "$localStorage", DeviceController])
	.controller("LoginController", ["$scope", "$route","$http", "mvmHttpRequest","$localStorage", LoginController])
	.controller("MyProfileController", ["$scope", "$http", MyProfileController])
	.controller("ShopController", ["$scope", "$http", ShopController])
	.controller("NotificationsController", ["$scope", "mvmHttpRequest", NotificationsController])
	.controller("SupportController", ["$scope", "$http", SupportController]);
	
