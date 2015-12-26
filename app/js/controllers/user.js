//User controller
app.controller('UserController', ['$scope', 'UserService', function ($scope, UserService) {
	
	$scope.loginError = false;
	$scope.loginErrMsg = 'Username or Password invalid!!';

	//Login function
	$scope.login = function() {
		console.log($scope.user);
		console.log('About to login');
		var opts = {};
		opts.username = $scope.user.email;
		opts.password = $scope.user.password;

		UserService.getLogin(opts, function(data) {
			console.log(data);
		});

		//Need to call service
	}

	//Registration
	$scope.registration = function() {
		var opts = {};
		opts.firstame = $scope.user.firstname;
		opts.lastname = $scope.user.lastname;
		opts.username = $scope.user.username;
		opts.email = $scope.user.email;
		opts.password = $scope.user.password;
		opts.mobile = $scope.user.mobile;
		UserService.register(opts, function(data) {
			console.log(data);
			console.log("Register successfully");
		});
	}

	$scope.loginReset = function() {
		$scope.user = [];
	}
}]);