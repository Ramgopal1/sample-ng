function DeviceController($scope, mvmHttpRequest, $localStorage){
	$scope.device = {};
	$scope.devicedetails = {
		visible: true	
	};
	$scope.deviceDetailLst = {};
		var deviceData = $scope.application.dataStore.device // $localStorage.device;
//		console.log('Device Data:', deviceData)
		if(!deviceData){
			mvmHttpRequest.getHttp('rcaccountsummary')
				.success(function(response, status) {
				$scope.application.setPageLoading(false);
					$scope.application.title = response.JsonArray[0].PageInfo.scrnHdg;
					$scope.application.setScreenData("device", response);
					$scope.device = response.JsonArray;
					$scope.deviceDetailLst = $scope.device[0].deviceDetailLst;
				 });
		}else{
			$scope.device = deviceData.JsonArray;
			$scope.deviceDetailLst = $scope.device[0].deviceDetailLst;
		}

         $scope.advancedClass = true;
         $scope.toggleCustom = function() {
             $scope.advancedClass = ($scope.advancedClass) === false ? false:true;
         };
}
