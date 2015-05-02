angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {

  var liveServer = "https://flow-amigo.herokuapp.com/";
// var liveServer = "http://localhost:3000/";

$http.get( liveServer + 'posts.json').
  success(function(data, status, headers, config) {
   	console.log(data);
   	$scope.posts = data; 
  }).
  error(function(data, status, headers, config) {
   
  });
})

.controller('ChatsCtrl', function($scope, $http) {

$http.get(liveServer + 'users.json').
  success(function(data, status, headers, config) {

   	$scope.chats = data; 
  }).
  error(function(data, status, headers, config) {
   
  });



  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $http, $stateParams) {
$http.get(liveServer + 'users/' + $stateParams.chatId + '.json').
  success(function(data, status, headers, config) {
   	$scope.chat = data; 
  }).
  error(function(data, status, headers, config) {
   
  });
 

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
