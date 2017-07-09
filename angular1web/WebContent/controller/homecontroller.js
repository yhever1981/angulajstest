app.controller('HomeController', function($scope,userService) {
	//$scope.$route = $route;
	var userInfo = userService.getUserInfoById(1);
	 console.log("me ge chacha...还回成功, returndata:" + userInfo.toString());
	 console.log("me ge chacha...还回成功, firstName:" + userInfo.firstName);
	$scope.userInfo = userInfo;
})