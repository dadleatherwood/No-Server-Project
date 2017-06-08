angular.module('myApp').controller('myAppCtrl', function($scope,myAppSrv,$state){
  $scope.test = "I am working"
  $scope.role = ""
  $scope.loggedIn = false;
  $scope.username = ""


  $scope.login = function(user){
    var user = myAppSrv.findUser(user, $scope.role)
    console.log(user)
    if(user){
      $scope.loggedIn = true;
      $scope.username = user.first_name + " " + user.last_name
      $state.go($scope.role, {id: user.student_id || user.teacher_id})
  }
  }
})
