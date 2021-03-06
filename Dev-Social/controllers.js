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

  $scope.createUser = function (name, tagline, img, bio) {
    mainService.makeUser(name, tagline, img, bio);
    $scope.mainUser = mainService.getMainUser();
   }



});
