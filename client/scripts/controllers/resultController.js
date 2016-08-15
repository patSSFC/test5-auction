// test5.controller('ResultController', function($scope, $location, productFactory, userFactory) {
//     var vm = this;
//
//     getHelper();
//     function getHelper() {
//         productFactory.getProducts(function(data) {
//             if(data.status === 200) {
//                 vm.products = data.data;
//                 console.log(vm.products);
//             } else {
//                 vm.error = true;
//             }
//         })
//         highestBid();
//     }
//
//     function highestBid() {
//         var maxBid = 0;
//         for (var i = 0; i < vm.products.length; i++) {
//             for( var j = 0; j < vm.products._bids.length; j++) {
//                 if(vm.products[i]._bids[j] > maxBid) {
//                     maxBid = vm.products[i]._bids[j];
//                     vm.products[i].maxBid = maxBid;
//                 }
//             }
//         }
//     }
//
//     console.log(vm.products.length);
// })
