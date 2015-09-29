function HomeController($scope, mvmHttpRequest){
	$scope.data = {
		
	};
	
	$scope.application.data = $scope.application.getScreenData("launchRCApp");
	console.log("Home data "+$scope.application.data);
	$scope.application.title = $scope.application.data.PageInfo.scrnHdg;
	var menuObject = $scope.application.getScreenData("MainTable");
	$scope.hamburger.menuList = menuObject.tpLelevlMenu.mainTable;
	
	if(!$scope.application.hasNotification){
		mvmHttpRequest.getHttp('notifications')
		.success(function(response, status) {
			      console.log("notificaiton response:",response);
			      $scope.application.notificationsCount = response.notificationsCount;
			      $scope.application.hasNotification = "true";
				  $scope.application.notification = response;
		});
	}

}
