angular.module('socialApp').controller('test', function($scope, mainService) {
  $scope.test = mainService.getMainUser();
})
