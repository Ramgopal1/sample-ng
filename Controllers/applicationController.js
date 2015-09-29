function ApplicationController($scope, $http, $location,$timeOut, $rootScope,  $localStorage, $sessionStorage, $cookies){
//     $scope = this;
	$scope.pageLoading = false;
	/*
	$scope.callBackpageLoading=function(){					
			$pageLoading(function(){$scope.pageLoading = true;}, 400);
	}	

	$scope.callBackpageLoading();
*/	
	$scope.isActive=function(pathMenu){
		pathMenu = "/"+pathMenu;
		if($location.path() == pathMenu){
			return true;
		}
		else{
			return false;
		}
		
	}

	$rootScope.application = {
	    title: "My Verizon",
	    setUser: false,
	    dataStore:{},
	    removeUser: false,
	    getUser: false,
	    getPassword:false,
		currentDeviceIndex:0,
		preventToolbar: false,
		preventTabbar: false,
		paymentMethod : "",
		amountToPay:"",
		dateToPay:"",	
		notificationsCount:"",
		model:{
			errMsg:"",
			futureMsg:"Thanks for your interest This option will be added as part of next release!",
			visible: false,
			toggle: function(temp){
				$rootScope.application.model.errMsg = temp;
				$rootScope.application.model.visible = !$rootScope.application.model.visible;
			}
		},
		dosignout:{
			sout: false,
			toggle1: function(){
				$rootScope.application.dosignout.sout = !$rootScope.application.dosignout.sout;
//				$localStorage.$reset();
				$scope.application.dataStore == null;
				localStorage.clear();
			}
		},
		showSubPageToolbarBtn: false,		
	    slider:{
	    	animated:false,
	    	makeSlide: function(){
	    		$scope.application.slider.animated = !$scope.application.slider.animated;
	    	}
	    },
	    navigation: {
	    	goTo: function(view){
// 	    		var vp = angular.element(document.querySelector('.mvm-viewport.animate-slide')),
// 	    			vpd = angular.element(document.querySelector('.mvm-viewport-decoy'));
// 	    		vpd.html(vp.html());
				// Handle back button using '<' symbol.
				if(view == '<'){
					var a = $location.path(),
						b = a.lastIndexOf('/');
					if(b !== 0){
						view = a.substr(1, b-1);
					}
				}

	    						
	    		$location.path("/" + view);
				//$scope.callBackpageLoading();
// 	    		setpageLoading(function(){
// 	    			vpd.html("");
// 	    		}, 2000);
	    		document.getElementById("mvm-container").scrollTop=0;
	    	},
	    	
	    	signout: function(){
	    		$scope.application.removeUser();
	    		$scope.application.slider.makeSlide();
	    		$scope.application.dosignout.sout=false;
	    		$scope.application.navigation.goTo('Login');
	    	}
	    },
		
		setScreenData: function(page, response){
    		//$localStorage[page] = response;
    		$scope.application.dataStore[page] = response;
    		//$cookies.put('device', response);
    	},
		
    	getScreenData: function(pageType){
    		if(!$scope.application.dataStore.screen){
    			$scope.application.navigation.goTo('Login');
    		}
    		else{
				var dataList =$scope.application.dataStore.screen.JsonArray;
				for(var i=0; i<dataList.length; i++){
					if(!!(dataList[i].PageInfo)){
						var pType = dataList[i].PageInfo.pageType;
						if(pType == pageType){
							//console.log("$localStorage", dataList[i]);
							return dataList[i];
						}
					}			
				}
    	 }	
    	},
		
		
		
    	setPageLoading: function(val) {
    		//console.log("$scope.pageLoading", $scope.pageLoading);
    		//console.log("page loading.....");
    		$scope.pageLoading = val;
    	}
    	
	};
	
	$scope.hamburger = {
		menuList: [],
		toggleAccordion: function(index){
			var menuList = $scope.hamburger.menuList;
// 			console.log("%c arguments", "color:red;font-size:20px;", arguments);			
			for(var j=0; j < menuList.length;j++){
				if(j !== index){
					menuList[j].subMenuVisible = false;
				}else{
					menuList[index].subMenuVisible = !!!menuList[index].subMenuVisible;
				}		
			}
		}
	}
	var ftreMsg="Thanks for your interest This option will be added as part of next release!";
	$scope.handleMenuClick = function(pageType, prev_menu){
		$scope.application.slider.makeSlide();
		$scope.hamburger.toggleAccordion(prev_menu);
		if(pageType == "payment"){
			$scope.application.navigation.goTo('Payment');			
		}
		else if(pageType == "deviceDetailsList"){
			$scope.application.navigation.goTo('Device');			
		}
		else if(pageType == "profileDetailSuccess"){
			$scope.application.navigation.goTo('MyProfile');			
		}
		else if(pageType == "custSupport"){
			$scope.application.navigation.goTo('Support');			
		}
		else if(pageType == "shopVerizon"){
			$scope.application.navigation.goTo('Shop');			
		}		
		else{
			$scope.application.model.toggle(ftreMsg);
			$scope.application.slider.makeSlide();
		}					
	}   

	/*var menuObject = $scope.application.getScreenData("MainTable");
	$scope.hamburger.menuList = menuObject.tpLelevlMenu.mainTable;
	*/
	
	
	
}
