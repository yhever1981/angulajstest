app.service('userService', function() {
	this.getUserInfoById = function (id)
	{
		firstName='john';
		lastName='leo';
		return {'firstName':firstName,'lastName':lastName};
	}
});



app.factory('myFactory',function(){
	
	
});