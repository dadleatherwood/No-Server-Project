angular.module('myApp').controller('courseCtrl', function($scope,$stateParams,myAppSrv){
  $scope.topicFilter = ""
  $scope.assignmentFilter = ""
  $scope.$watch('assignmentFilter', function(a, b, c) {
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
  })
  var id = parseInt($stateParams.id)
  $scope.course = myAppSrv.findClass(id)
  console.log($scope.course)
})
