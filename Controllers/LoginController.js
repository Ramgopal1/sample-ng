function LoginController($scope, $route, $http, mvmHttpRequest, $localStorage){
	$scope.selectedPage = $route.current.params.subpage || "username";
	$scope.application.title = "My Verizon Registration";
	$scope.application.preventToolbar = true;
	var userName = "";
	$scope.handleSubmit = function(){
		if( $scope.userid!=undefined){
			$scope.application.setUser({username: $scope.userid});
			userValidateSuccess();
		}
		
		if($scope.password!=undefined){
			$scope.application.setUser({username: $scope.application.getUser(),password: $scope.password});
			passwordValidateSuccess();
		}
	}
	
	function userValidateSuccess(){
		mvmHttpRequest.getHttp('validateUserName')
		.success(function(response, status) {
			$scope.application.setPageLoading(false);
			if(response.displayPwd === "Y" || response.displayPwd === "N"){
				$scope.serviceError = " ";
				$scope.application.navigation.goTo('Login/password');
			}else{
				$scope.application.model.toggle(response.ErrInfo.errUsrMsg);
			} 
		});
	}
	
	function passwordValidateSuccess(){
		mvmHttpRequest.getHttp('launchRCApp')
		.success(function(response, status) {
			$scope.application.setPageLoading(false);
			if(response.JsonArray){
				if(response.JsonArray[0].ErrInfo && response.JsonArray[0].ErrInfo.errCd === "0"){
					$scope.serviceError = " ";
					$scope.application.setScreenData("screen", response);
					$scope.application.navigation.goTo('Home');
				}else{
					$scope.application.model.toggle(response.ErrInfo.errUsrMsg);
				}				
			}else{
				$scope.application.model.toggle(response.ErrInfo.errUsrMsg);
			}      
		});
	}
}
