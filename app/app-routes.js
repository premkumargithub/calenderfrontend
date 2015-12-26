app.config(['$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', 
        function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
        app = {
        controller: $controllerProvider.register,
        directive: $compileProvider.directive,
        filter: $filterProvider.register,
        factory: $provide.factory,
        service: $provide.service,
      };

    $routeProvider.
    when('/', {
        templateUrl: 'app/views/login.html',
        controller: 'UserController',
        resolve:{
            load: ['$q', '$rootScope', function($q, $rootScope) {
            var deferred = $q.defer();
            var dependencies = [
                'app/js/services/user',
                'app/js/controllers/user'
            ];
            // Load the dependencies
            require(dependencies, function() {
            // all dependencies have now been loaded by so resolve the promise
            $rootScope.$apply(function() {
                deferred.resolve();
            });
            });

            return deferred.promise;
            }]
        }
    }).
    when('/signup', {
        templateUrl: 'app/views/signup.html',
        controller: 'UserController',
        resolve:{
            load: ['$q', '$rootScope', function($q, $rootScope) {
            var deferred = $q.defer();
            var dependencies = [
                'app/js/services/user',
                'app/js/controllers/user'
            ];
            require(dependencies, function() {
            $rootScope.$apply(function() {
                deferred.resolve();
            });
            });

            return deferred.promise;
            }]
        }
    }).
    when('/dashboard', {
        templateUrl: 'app/views/dashboard.html'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);