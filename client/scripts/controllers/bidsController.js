test5.controller('BidsController', function($scope, $location, userFactory, productFactory, bidFactory) {
    console.log(productFactory);
    var vm = this;
    vm.user = userFactory.user;

    vm.onBid = function(p_id, index, u_id) {
        vm.currIndex = index;
        var maxBid = 0;
        for(var i = 0; i < vm.products[index]._bids.length; i++) {
            if(vm.products[index]._bids[i].amount >= 0) {
                maxBid = vm.products[index]._bids[i].amount;
                vm.products[index].maxBid = maxBid;
            }
        }
        console.log(vm.products);
        if(vm.bidAmount[index] < maxBid || vm.bidAmount[index == 0]) {
            vm.bidError = true;
        } else {
            vm.bidError = false;
            var bid = {p_id : p_id, amount : vm.bidAmount[index], u_id : u_id};
            console.log("success!");
            bidFactory.postBid(bid, function(data) {
                console.log(data);
                getHelper();
            })
        }
    };

    vm.onEnd = function() {
        vm.endError = false;
        for (var i = 0; i < vm.products.length; i++) {
            if (vm.products[i]._bids.length === 0) {
                vm.endError = true;
            }
        }
        if(vm.endError === false) {
            console.log('lets do it!');
            $location.path('/results');
            highestBid();
            console.log(vm.products);
        }
    }

    vm.onStart = function() {
        bidFactory.deleteBids(function(data) {
            $location.path('/bids');
        });
    }


    function highestBid() {
        var maxBid = 0;
        for (var i = 0; i < vm.products.length; i++) {
            for( var j = 0; j < vm.products[i]._bids.length; j++) {
                if(vm.products[i]._bids[j].amount > maxBid) {
                    maxBid = vm.products[i]._bids[j];
                    vm.products[i].highBid = maxBid;
                }
            }
        }
    }

    getHelper();
    function getHelper() {
        productFactory.getProducts(function(data) {
            if(data.status === 200) {
                vm.products = data.data;
            } else {
                vm.error = true;
            }
        })
    }
});
