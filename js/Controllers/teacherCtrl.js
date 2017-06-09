angular.module('myApp').controller('teacherCtrl',function($scope, $stateParams,myAppSrv){
  var id = parseInt($stateParams.id)
  $scope.teacher = myAppSrv.findTeacherById(id)
  $scope.courses = []

  for (var course of $scope.teacher.classes) {
    var foundTeacherCourse = myAppSrv.findClass(course.class_id)
    $scope.courses.push(foundTeacherCourse)
  }
})
