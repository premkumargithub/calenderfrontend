app.service('UserService', ['$http', function($http) {
	this.getLogin = function(opts, callback) {
		var user = {};
		user.username = 'abc';
		user.email = 'abc.abc@gmail.com';
		callback(user);
		//Need to server api
	};

	this.register = function(opts, callback) {
		var url = APP.service.createUser;
        doPost($http, url, opts, function(data) {
            callback(data);
        });
	};
}]);