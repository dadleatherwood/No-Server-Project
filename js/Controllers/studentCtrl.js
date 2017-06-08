angular.module('myApp').controller('studentCtrl', function($scope,$stateParams,myAppSrv){
  var id = parseInt($stateParams.id)
  $scope.student = myAppSrv.findStudentById(id)
  console.log($scope.student)
})
