angular.module('myApp').controller('courseCtrl', function($scope,$stateParams,myAppSrv){
  $scope.topicFilter = ""
  $scope.assignmentFilter = ""
  var id = parseInt($stateParams.id)
  $scope.course = myAppSrv.findClass(id)
  console.log($scope.course)
  $scope.toggleButtons = function() {
    console.log("Clicked list")
    $scope.buttonsVisible = !$scope.buttonsVisible;
  }

})
