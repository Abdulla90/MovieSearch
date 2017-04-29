app.service('httpService', function($http) {
    this.get = function(url,cb){
        $http({
            method: 'GET',
            url: url
         }).then(function(success) {
                cb(null, success);
            }, function(error) {
                cb("server error");
            });
    }
});