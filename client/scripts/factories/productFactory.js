test5.factory('productFactory', function($http) {
    var factory = this;

    factory.getProducts = function(callback) {
        $http.get('/products')
        .then(function(returnData) {
            callback(returnData);
        }, function(err) {
            callback(err);
        })
    }

    return this;
})
