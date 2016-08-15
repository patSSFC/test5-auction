test5.controller('UserController', function($scope, $location, userFactory) {
    console.log("loaded user controller!");
    var vm = this;
    console.log(userFactory);

    vm.onLogin = function() {
        userFactory.login({username: $scope.formData.username}, function(data) {
            if(data.status === 200) {
                vm.success = true;
                vm.user = data.data.user;
                $location.path('/bids');
            } else {
                vm.error = true;
            }
        })
    };
});
