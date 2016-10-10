/**
 * Login Service
 */
investigacionApp.service("LoginService", function($log, $http, $q) {

	this.sendCrendential = function(request) {
		$log.debug("Login Service - Autentication");
		
		var deferred = $q.defer();
		$http({
			method : 'POST',
			url : 'http://localhost:8080/mavenproject3-web/rest/login/users',
			data : request
		}).success(function(response) {
			console.log("Response Success File:: ", response);
			deferred.resolve(response);
		}).error(function(response) {
			console.log("Response Error File:: ", response);
			deferred.reject(response);
		});
		return deferred.promise;
	};

});