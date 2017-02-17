angular.module('socialApp').controller('mainController', function($scope, mainService) {


  var pages = ['initial', 'landing','view', 'find', 'update'];

$scope.initial = true;

$scope.togglePage = function(displayView) {
  pages.forEach(function(page) {
    if (page === displayView) {
      $scope[page] = true;
    } else {
      $scope[page] = false;
    }
  })
};

$scope.users = mainService.getUsers();

$scope.createUser = function (newUser) {
  mainService.makeUser(newUser);
  $scope.mainUser = mainService.getMainUser();
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

 // $scope.updateUser();






});
