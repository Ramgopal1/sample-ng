function RegisterController($scope, mvmHttpRequest, $http, $localStorage, $filter){	
	$scope.application.setPageLoading();		
    
//    if($localStorage.registerData){
//      $scope.registerData = $localStorage.registerData; 
//    }else{
//      mvmHttpRequest.getHttp('register')
//		.success(function(response, status) {
//		  $scope.application.setPageLoading(false);
//	  	  $localStorage.registerData = response;
//	  	  $scope.registerData = $localStorage.registerData;	  	  
//	 }).error(function(data, status, headers, config) {
//	   alert("looks like there is some problem. Try after sometime.!");
//	 });   	
//    }

    $scope.continueRegister = function(){
    	if($scope.user_id === "" || $scope.user_id === undefined){
			
    	}else{    		
    		$scope.application.navigation.goTo('Register/accountLevel');
    	}
    }

    $scope.continueProfileSetUp = function(){
    	setprofileErrorFalse();		
    	if($scope.txtUserId === " " || $scope.txtUserId == undefined){
    		$scope.showUserError = true;
    	}else if($scope.txtgreetingName === " " || $scope.txtgreetingName == undefined){
    		$scope.showGreetError = true;
    	}else if($scope.txtEmail === " " || $scope.txtEmail == undefined){
    		$scope.showMailError = true;
    	}else if($scope.txtCnfMail === " " || $scope.txtCnfMail == undefined){
    		$scope.showCnfMailError = true;
    	}else if($scope.txtzipCode === " " || $scope.txtzipCode == undefined){
    		$scope.showBillZipError = true;
    	}else if($scope.txtBillPwd === " " || $scope.txtBillPwd == undefined){
    		$scope.showBillPwdError = true;
    	}else if($scope.chkTnC == false || $scope.chkTnC == undefined){
    		$scope.showTnCError = true;
    	}else if($scope.txtEmail !== $scope.txtCnfMail){
    		$scope.showEMailError = true;
    	}else{
			$scope.application.navigation.goTo('Register/tempPassword');
		}
    }

    $scope.hideTnCError = function(){
    	if($scope.chkTnC == true){
    		$scope.showTnCError = false;
    	}
    }

    function setprofileErrorFalse(){
		 $scope.showUserError = false;
		 $scope.showGreetError = false;
		 $scope.showMailError = false;
		 $scope.showCnfMailError = false;
		 $scope.showBillZipError = false;
		 $scope.showBillPwdError = false;
		 $scope.showTnCError = false;
		 $scope.showEMailError = false;
	}
}
