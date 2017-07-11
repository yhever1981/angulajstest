var app = angular.module('myApp', []);

app.controller('myCtrl',  function($scope,$http)
{
	$scope.greeting ={
			text: 'Hello Tammy,'
	}
	
	$scope.name= "John";
	
	$scope.names=[{name:'namea',country:'countrya'},
		{name:'nameb',country:'countryb'},
		{name:'kai',country:'demark'}];
	
	 $http({
	        method: 'GET',
	        url: 'http://localhost:9000/greeting'
	    }).then(
	    		function successCallback(response) {
	    			$scope.greetinglist = response.data;
	        }, function errorCallback(response) {
	            console.log("failed")
	    });
	  
});


app.controller('addUser',  function($scope,$http)
{
	
	$scope.submit = function()
	{
		alert($scope.user.id);
	}
	
	  
});