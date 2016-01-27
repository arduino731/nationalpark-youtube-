angular
    
    .module("nationalPark.controllers", [])

    .controller('AppController', ['$scope', '$state','$http', function($scope, $state, $http){
        $scope.$state = $state;
        $http.get('https://nationalpark.firebaseio.com/parks.json').success(function(response){
            $scope.parks = response;
            // console.log(response);
        })
        
    }])
    
    .controller('IndexController', ['$scope', '$http','$state', function($scope, $http, $state){ 
        $scope.$state = $state;
        $http.get('https://nationalpark.firebaseio.com/parks.json').success(function(response){
            $scope.parks = response;
            // console.log(response);
        })
        
    }])
    
    .controller('ViewButtonController', ['$scope', '$stateParams', '$http', '$filter', function($scope, $stateParams, $http, $filter){ 
        
        var viewId = $stateParams.viewId;
        $http.get('https://nationalpark.firebaseio.com/parks.json').success(function(data){
            $scope.park = $filter('filter')(data, function(d){
                return d.id == viewId;
            })[0];
            console.log($scope.park);
        })
    }])
    
    .controller('test2Controller', ['$scope', '$state','$http', function($scope, $state, $http){
        $scope.$state = $state;
        $http.get('https://nationalpark.firebaseio.com/parks.json').success(function(response){
            $scope.parks = response;
            console.log(response);
        })
        
        $scope.theBestVideo = 'sMKoNBRZM1M';
        
    }])
    
    .controller('FlickrFeedController', ['$scope','$http', function($scope, $http){
        
        // console.log($scope.parks);
    }])
    
    .controller('LocationController', ['$scope','$http', function($scope, $http){
        
        // console.log($scope.parks);
    }])