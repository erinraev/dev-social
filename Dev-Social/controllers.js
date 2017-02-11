angular.module('socialApp').controller('mainController', function($scope) {
  $scope.test = "working";

  var pages = ['view', 'find', 'update'];

  $scope.togglePage = function(displayView) {
    pages.forEach(function(page) {
      if (page === displayView) {
        $scope[page] = true;
      } else {
        $scope[page] = false;
      }
    })
  };

});
