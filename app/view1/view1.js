'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$http', '$scope', function($http, $scope) {
    $scope.performSearch = function(){
        $http({'method':'jsonp', 'url':'http://api.duckduckgo.com/', 'params':{'q': $scope.newSearchQuery,
                                                 't': 'sproutProgrammingTest',
                                                 'format': 'json',
                                                 'callback': 'JSON_CALLBACK'}})
            .success(function(data, status, headers, config){
                $scope.result = data;
            })
            .error(function(data, status, headers, config){
            });
    };

}]);


//'use strict';
//angular.module('myApp.view1', ['ngRoute'])
//
//    .config(['$routeProvider', function($routeProvider) {
//    $routeProvider.when('/view1', {
//        templateUrl: 'view1/view1.html',
//        controller: 'View1Ctrl'
//    });
//}])
//
//    .config(['$httpProvider', function($httpProvider) {
//    $httpProvider.defaults.headers.common['Authorization'] = "Basic ZjFDYW5kaWRhdGU6ZjE2dXIzMXIwY2s1";
//}])
//    .controller('View1Ctrl', ['$http', '$scope', function($http, $scope) {
//    $scope.newTweet = {};
//    $scope.showUploadStatus = false;
//    $scope.tweetsToDisplay = 10;
//    $scope.tweetsToLoad = 150; //Max is 200
//
//    $scope.submitNewTweet = function(){
//        $http.post('https://f1-dev-test.herokuapp.com/1.1/statuses/update.json',
//            {'screen_name': 'f1Test',
//                'status': $scope.newTweet.text})
//            .success(function(data, status, headers, config){
//                $scope.tweetUploadSuccess = true;
//                $scope.showUploadStatus = true;
//                refreshTweets();
//            })
//            .error(function(data, status, headers, config){
//                $scope.tweetUploadSuccess = false;
//                $scope.showUploadStatus = true;
//            })
//    }
//
//    function refreshTweets(){
//        $http.get('https://f1-dev-test.herokuapp.com/1.1/statuses/home_timeline.json',
//            {'screen_name': 'f1Test',
//                'count': $scope.tweetsToLoad}).
//            success(function(data, status, headers, config) {
//                // this callback will be called asynchronously
//                // when the response is available
//                if (data){
//                    data.forEach(function(tweet){
//                        tweet.created_at = tweet.created_at.replace("+0000 ", "") + " UTC";
//                        tweet.created_at = new Date(tweet.created_at);
//                    });
//                    var dStr = "Fri Apr 09 12:53:54 +0000 2010";
//                    dStr = dStr.replace("+0000 ", "") + " UTC";
//                    var d = new Date(dStr);
//                }
//                $scope.tweets = data;
//                $scope.tweetsLoaded = data.length;
//
//            }).
//            error(function(data, status, headers, config) {
//                // called asynchronously if an error occurs
//                // or server returns response with an error status.
//            });
//    };
//    refreshTweets();
//}]);
//
////myApp.controller('GreetingController', ['$scope', function($scope) {
////    $scope.greeting = 'Hola!';
////}]);