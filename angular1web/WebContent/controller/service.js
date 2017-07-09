app.service('userService', function() {
	this.getUserInfoById = function (id)
	{
		firstName='john';
		lastName='leo111';
		
		return {"user":id,'firstName':firstName,'lastName':lastName};
	}
});



app.factory('myFactory',function(){
	
	
});