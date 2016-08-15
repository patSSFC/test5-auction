var test5 = angular.module('test5', ['ngRoute']);

test5.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '../partials/login.html',
            controller: 'UserController',
            controllerAs: 'vm'
        })
        .when('/bids', {
            templateUrl: '../partials/bids.html',
            controller: 'BidsController',
            controllerAs: 'vm'
        })
        .when('/results', {
            templateUrl: '../partials/results.html',
            controller: 'BidsController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo : '/login'
        });
})
