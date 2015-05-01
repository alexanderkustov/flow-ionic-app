angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {

$http.get('http://localhost:3000/posts.json').
  success(function(data, status, headers, config) {
   	console.log(data[0]);
   	$scope.posts = data; 
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
})

.controller('ChatsCtrl', function($scope, $http) {

$http.get('http://localhost:3000/users.json').
  success(function(data, status, headers, config) {

   	$scope.chats = data; 
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });



  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $http, $stateParams) {
$http.get('http://localhost:3000/users/' + $stateParams.chatId + '.json').
  success(function(data, status, headers, config) {
   	$scope.chat = data; 
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  //$scope.chat = Chats.get($stateParams.chatId);

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
