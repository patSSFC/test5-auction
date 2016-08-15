test5.factory('bidFactory', function($http) {
    var factory = this;

    factory.postBid = function(data, callback) {
        $http.post('/bids', data)
            .then(function(returnData) {
                callback(returnData);
            }, function(err) {
                callback(err);
            })
    }

    factory.deleteBids = function(callback) {
        $http.delete('/bids')
            .then(function(returnData) {
                callback(returnData);
            }, function(err) {
                callback(err);
            })
    }

    return factory;
});
