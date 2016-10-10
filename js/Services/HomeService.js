/**
 * Home Service
 */
investigacionApp.service("HomeService", function($log, $http, $q) {

	this.sendFile = function(request) {
		$log.debug("Home Service - SendFile");
		
		var deferred = $q.defer();
		$http({
			method : 'POST',
			url : 'http://localhost:8080/mavenproject3-web/rest/files',
			data : request,
			transformRequest: angular.identity,
			headers: {'Content-Type': undefined}
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