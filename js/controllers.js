angular.module('socialApp').controller('mainController', function($scope, mainService, $state) {


$scope.friendsList = mainService.getFriendsList();

$scope.users = mainService.getUsers();

// getUsers();
//
// function getUsers() {
//   $scope.users = mainService.getUsers();
//   removeFriendsFromUsers();  //make a function that filters friends out of user list
// }

$scope.mainUser = mainService.getMainUser();

$scope.friend = mainService.getFriend();

console.log('my friends', $scope.friendsList)
  console.log('users', $scope.users)

$scope.showWarning = function() {
  if ($scope.friendsList.length == 0) {
    return true;
  }
}

$scope.removeFriend = function () {
  mainService.removeFriend($scope.friend);
  $scope.friendsList.splice($scope.friend, 1);
  $state.go('view')
}

$scope.addFriend = function () {
  mainService.addFriend($scope.friend);
  $scope.users.splice($scope.friend, 1);
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



});
