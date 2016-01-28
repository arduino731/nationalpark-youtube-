angular
    
    .module("nationalPark.controllers", [])

    .config(function($sceDelegateProvider) {
      $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://www.youtube.com/**'
      ]);
    })
    
    .controller('AppController', ['$scope', '$state','$http', function($scope, $state, $http){
        $scope.$state = $state;
        $http.get('https://nationalpark.firebaseio.com/parks.json').success(function(response){
            $scope.parks = response;
            // console.log(response);
        })
        
    }])
    
    .controller('IndexController', ['$scope', '$http','$state', function($scope, $http, $state){ 
        $scope.$state = $state;
        
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        var slides = $scope.slides = [];
        $scope.addSlide = function() {
          var newWidth = slides.length + 1;
          slides.push({
            // image: '//placekitten.com/' + newWidth + '/300',
            image: 'img/slide/' + newWidth + '.jpg',
            text: ['Glacier National Park','Arches National Park','Yosemite National Park','Canyonlands National Park'][slides.length]
          });
        };
        for (var i=0; i<4; i++) {
          $scope.addSlide();
        }
        
        
        
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
        
        // $http.get('https://nationalpark.firebaseio.com/parks.json').success(function(response){
        //     $scope.videos = response;
        //     console.log(response);
        // })
        
        $scope.videos = {
          name: 'some name',
          description: 'some description',
          media: [{
                name:"some name",
                description: 'some description',
                src: 'v5Asedlj2cw',
          },
          {     name:"some name",
                description: 'some description',
                src: 'v5Asedlj2cw',
          },
          {
                name:"some name",
                description: 'some description',
                src: 'v5Asedlj2cw',
          },
          {
                name:"some name",
                description: 'some description',
                src: 'v5Asedlj2cw',
          },
          {
                name:"some name",
                description: 'some description',
                src: 'v5Asedlj2cw',
          },
          {
                name:"some name",
                description: 'some description',
                src: 'v5Asedlj2cw',
          },
          {
                name:"some name",
                description: 'some description',
                src: 'v5Asedlj2cw',
          }
          ]
        };
        
        $scope.getIframeSrc = function(src) {
          return 'https://www.youtube.com/embed/' + src;
        };
        
    }])
    
    .controller('FlickrFeedController', ['$scope','$http', function($scope, $http){
        
        // console.log($scope.parks);
    }])
    
    .controller('LocationController', ['$scope','$http', function($scope, $http){
        
        // console.log($scope.parks);
    }])