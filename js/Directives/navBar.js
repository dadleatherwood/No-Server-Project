angular.module('myApp').directive('navBar', function(){
  return {
    templateUrl: "views/navBar.html",
    restrict: 'E',
    scope: {
      role: '=',
      loggedIn: '='
    },
    controller: function($scope, myAppSrv){
      $scope.role = 'none'
      $scope.changeRole = function(role) {
        $scope.role = role;
        $scope.loggingIn = true;

      }
    }
  }
})
