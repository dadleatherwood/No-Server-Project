angular.module('myApp').directive('navBar', function(){
  return {
    templateUrl: "views/navBar.html",
    restrict: 'E',
    scope: {
      role: '=',
      loggedIn: '=',
      username: '='
    },
    controller: function($scope, myAppSrv,$state){
      $scope.role = 'none'
      $scope.changeRole = function(role) {
        $scope.role = role;
        $scope.loggingIn = true;
      }
      $scope.signOut = function(){
        $scope.role = ""
        $scope.loggedIn = false
        $scope.loggingIn = false
        $state.go('home')
      }
    }

  }
})
