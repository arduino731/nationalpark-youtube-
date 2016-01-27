var app = angular.module("myApp", [
    'nationalPark.controllers',
    'ui.router',
    'youtube-embed',
    // 'Authentication',
    // 'ngCookies'
    'ui.bootstrap'
    
    ]);
    
app.run([
  "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    return $rootScope.$stateParams = $stateParams;
  }
]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    // Redirect any unresolved url
    $urlRouterProvider.otherwise("/index");

    $stateProvider

        .state('index', {
            url: "/index",
            templateUrl: "views/index1.html",
            controller: "IndexController"
        })
        .state('view', {
            url: "/index/:viewId",
            templateUrl: "views/viewButton.html",
            controller: "ViewButtonController"
        })
        .state('test', {
            url: "/test",
            templateUrl: "views/test.html",
            controller: "testController"
        })
        .state('test2', {
            url: "/test2",
            templateUrl: "views/test2.html",
            controller: "test2Controller"
        }) 
        .state('flickrFeed', {
            url: "/flickrFeed",
            templateUrl: "views/flickrFeed.html",
            controller: "FlickrFeedController"
        })
        .state('location', {
            url: "/location",
            templateUrl: "views/location.html",
            controller: "LocationController"
        })
}]);
