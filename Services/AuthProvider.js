function AUTHProvider($cookies, $localStorage, $sessionStorage){
	var user = false;
	return{
		setUser : function(aUser){
			user = aUser;
			$cookies.username = aUser.username;
			$cookies.password = aUser.password;
		},
		removeUser : function(){
			$cookies.username = "";
			$cookies.password = "";
			user = false;
		},
		getUser: function(){
// 			console.log("user name fetched", user, user.username);
			return (user && user !== "false") ? user.username : "";
		},
		getPassword : function(){
			return (user && user !== "false") ? user.password : "";
		},
		isLoggedIn : function(){
			user = user ? user : {username: $cookies.username, password: $cookies.password}; 
			return (user && user.username) ? user : false;
		},
		setScreenData: function (response){
			$localStorage.data =  response.JsonArray[0];
			//console.log("$localStorage", $localStorage.data);
		},
		clearScreenData: function (){
			$localStorage.clear();
		}
	}
}
