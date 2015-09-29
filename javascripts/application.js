var MVM = angular.module('MVM', [
    'MVM.controller', 
    'MVM.directives', 
    'MVM.filters', 
    'MVM.services', 
    'MVM.router',
    'ngRoute',
    'ngTouch',
    'ngAnimate',
	'ngMessages',
	'ngCookies',
	'ngStorage'])
	.run(['$rootScope', '$location', 'Auth', function afterInjectionFn($rootScope, $location, Auth) {
// 		console.log("afterInjectionFn", arguments);

		$rootScope.$on('$routeChangeStart', function (event, params) {
			
			if(!$rootScope.application.setUser){
				$rootScope.application.setUser = Auth.setUser;
			}
			
			if(!$rootScope.application.removeUser){
				$rootScope.application.removeUser = Auth.removeUser;
			}
			
			if(!$rootScope.application.getUser){
				$rootScope.application.getUser = Auth.getUser;
			}

			if(!$rootScope.application.getPassword){
				$rootScope.application.getPassword = Auth.getPassword;
			}
			
			$rootScope.application.showSubPageToolbarBtn = ($location.path().lastIndexOf('/') !== 0);
									
			/* SKIP STATIC URL like Login, Register, ForgotPassword */			
			if($location.path().indexOf('Login') == -1 && $location.path().indexOf('Register') == -1){
			
// 				console.log("AUTH", Auth.isLoggedIn());
				if (!Auth.isLoggedIn()) {
// 					console.log('DENY', $rootScope.application);
	// 				event.preventDefault();
					$rootScope.application.preventToolbar = true;
					$rootScope.application.preventTabbar = true;
					$location.path('/Login');
				}
				else {
// 					console.log('ALLOW');
					$rootScope.application.preventToolbar = false;
					$rootScope.application.preventTabbar = false;
					//$location.path('/Home');
				}
			}else{
				$rootScope.application.preventToolbar = true;
				$rootScope.application.preventTabbar = true;
			}
		});
	}]);
