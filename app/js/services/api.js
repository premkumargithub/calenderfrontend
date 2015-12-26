function doPost($http, url, opt, callback){
	console.log("Service", opt);
    $http({
        method: "POST",
        url: url,
        data    : opt,
        headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    })
    .success( function(data, status, headers, config){      
        callback(data);
    })
    .error(function(data, status, headers, config){
    	callback(data);
    });
};