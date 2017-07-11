var app = angular.module('helloapp', []);

app.controller('helloworld',  function($scope)
{
	$scope.greeting ={
			text: 'Hello',
			name: 'Calvin'
	}
	
});