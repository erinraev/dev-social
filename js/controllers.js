angular.module('socialApp').controller('mainController', function($scope, mainService, $state) {

$scope.$state = $state;
$scope.users = [];

$scope.friendsList = mainService.getFriendsList();

var users = mainService.getUsers();

filterUsers(users)

$scope.mainUser = mainService.getMainUser();

$scope.friend = mainService.getFriend();

$scope.showWarning = function() {
  if ($scope.friendsList.length == 0) {
    return true;
  }
}

$scope.removeFriend = function () {
  var friendToRemove = $scope.friendsList.indexOf($scope.friend);
  mainService.removeFriend(friendToRemove);
  $state.go('view')
}

$scope.addFriend = function () {
  mainService.addFriend($scope.friend);
  $state.go('view')
}

$scope.hideButton = function() {
  if ($scope.friendsList.indexOf($scope.friend) !== -1) {
    return true;
  }
}

$scope.createUser = function (newUser) {
  mainService.makeUser(newUser);
  $state.go('landing')
 }

 $scope.viewFriend = function (user) {
   mainService.getFriendInfo(user)
   $state.go('info')
  }

 $scope.updateUser = function(user){
   var oldUser = $scope.mainUser;
   for (var key in user) {
     if (!user[key]) {
       delete user[key]
     }
   }
   var updatedUser = Object.assign({}, oldUser, user);
   console.log(updatedUser);
   $scope.user.name = ''
   $scope.user.tagline = ''
   $scope.user.bio = ''
   $scope.user.image = ''
   $scope.mainUser = mainService.makeUser(updatedUser);
 }

 $scope.hoverIn = function(){
       this.hoverEdit = true;
   };

 $scope.hoverOut = function(){
     this.hoverEdit = false;
 };

 function filterUsers(users) {
   users.forEach(function(user) {
     let isFriend = false;
     $scope.friendsList.forEach(function(friend) {
       if (friend == user) {
         isFriend = true;
       }
     })
     if (!isFriend) $scope.users.push(user)
   })
 }

});
