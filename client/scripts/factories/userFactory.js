test5.factory('userFactory', function($http) {
    var factory = this;

    factory.login = function(data, callback) {
        $http.post('/login', data)
            .then(function successCallback(returnData) {
                // this callback will be called asynchronously
                // when the response is available
                factory.message = returnData.data.message;
                factory.user = {username : returnData.data.user.name, id : returnData.data.user._id};
                callback(returnData);
            }, function errorCallback(err) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log("error in login!");
                console.log(err);
                callback(err);
            });
    }

    return factory;
});
