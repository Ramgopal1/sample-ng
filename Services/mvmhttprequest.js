function mvmHttpRequest($http, $rootScope) {
   var appData = {};
   //var rootURL = "https://mobile-esit.vzw.com/sit02/mvmrc/mvm/";
   var rootURL = "https://mobile-edev.vzw.com/dev03/mvmrc/mvm/";
   //var rootURL = "/MyVerizonNG/mvm/";
   //var rootURL = (window.location.hostname == "localhost")? "/MyVerizon/mvm/" :"/dev01/mvmrc/mvm/";
      
   appData.getHttp = function (page) {
	   if(page != "notifications")  $rootScope.application.setPageLoading(true);
	  
	  
	   
	   requestData = {"source_server":"None","appName":"MVM","mvmRegisterInd":"F",
				"os_name":"IOS","mot":"APNS","static_cache_version":"1.0",
				"static_cache_timestamp":new Date(),	"support_location_services":"false",
				"mdn":$rootScope.application.getUser(),"sw":"320","network_mode":"WIFI","current_hybrid_version":"-1",
				"current_app_version":"4.1.0","sh":"568","sourceID":"mvmrc","Initial_Launch":"true",
				"os_version":"8.1","model":"iPhone5,1","x_vzw_id":"4517712",
				"formfactor":"handset","device_name":"IPHONE"};
	   
	   
		if(page === "validateUserName"){
			 requestData = 		       
		       {"source_server":"None","os_name":"IOS","support_location_services":"false","formfactor":"handset",
			   "x_vzw_id":"4517712","os_version":"7.1","current_hybrid_version":"-1",
			   "current_app_version":"4.2.0","network_mode":"WIFI","sh":"568","model":"iPhone5,1",
			   "device_name":"IPHONE","sw":"320","sourceID":"mvmrc","Initial_Launch":"true"};
		  requestData.userId = $rootScope.application.getUser();	      
		}else if(page === "launchRCApp"){
		  requestData.userId = $rootScope.application.getUser();
		  requestData.password = $rootScope.application.getPassword();
		}
	   
      return $http({
		    method: 'POST',
		    url: rootURL + page,
		    data: requestData,
			  headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*"}

		})
         .error(function (data) {
        	 alert("looks like there is some problem. Try after sometime.!");
        	 console.log('There was an error!', data);
      });
   };
   
   appData.getNotifications = function(page) {
   
	
   }

   return appData;

}
