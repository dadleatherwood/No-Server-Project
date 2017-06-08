angular.module('myApp').controller('myAppCtrl', function($scope,myAppSrv,$state){
  $scope.test = "I am working"
  $scope.role = ""
  $scope.loggedIn = false;


  $scope.login = function(user){
    var id = myAppSrv.findUserId(user, $scope.role)
    console.log(id)
    if(id){
      $scope.loggedIn = true;
      $state.go($scope.role, {id: id})
  }
  }
})
