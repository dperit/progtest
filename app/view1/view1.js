'use strict';
angular.module('myApp.view1', ['ngRoute', 'ngTwitter'])

    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

    .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common['Authorization'] = "Basic ZjFDYW5kaWRhdGU6ZjE2dXIzMXIwY2s1";
}])
    .controller('View1Ctrl', ['$http', '$scope', function($http, $scope) {
    $scope.newTweet = {};
    $scope.showUploadStatus = false;
    $scope.submitNewTweet = function(){
        $http.post('https://f1-dev-test.herokuapp.com/1.1/statuses/update.json',
            {'screen_name': 'f1Test',
                'status': $scope.newTweet.text})
            .success(function(data, status, headers, config){
                $scope.tweetUploadSuccess = true;
                $scope.showUploadStatus = true;
            })
            .error(function(data, status, headers, config){
                $scope.tweetUploadSuccess = false;
                $scope.showUploadStatus = true;
            })
    }

    $http.get('https://f1-dev-test.herokuapp.com/1.1/statuses/home_timeline.json',
        {'screen_name': 'f1Test'}).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.tweets = data;

        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.data = data;

        });
}]);

//myApp.controller('GreetingController', ['$scope', function($scope) {
//    $scope.greeting = 'Hola!';
//}]);