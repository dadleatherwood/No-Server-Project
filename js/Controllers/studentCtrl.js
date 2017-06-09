angular.module('myApp').controller('studentCtrl', function($scope,$stateParams,myAppSrv){
  var id = parseInt($stateParams.id)
  $scope.student = myAppSrv.findStudentById(id)
  $scope.courses = []
  // for (var i = 0; i < $scope.student.classes.length; i++){
  //   var course = myAppSrv.findClass($scope.student.classes[i].class_id)
  //   course.grade = $scope.student.classes[i].grade
  //   $scope.courses.push(course)
  // }
  for (var course of $scope.student.classes) {
    // course.class_id, course.grade
    var foundCourse = myAppSrv.findClass(course.class_id)
    foundCourse.grade = course.grade
    $scope.courses.push(foundCourse)
  }
})
