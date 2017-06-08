angular.module('myApp').service('myAppSrv',function($http){
  var service = this;
  this.role = ""

  this.getStudentData = function(){
    return $http.get('student.json')
    .then(function(response) {
        service.students = response.data;
        return response;
    })
  }
  this.getTeacherData = function(){
    return $http.get('teacher.json')
    .then(function(response) {
      service.teachers = response.data;
      return response;
    })
  }

  this.getClassData = function(){
    return $http.get('class.json')
    .then(function(response) {
      service.classes = response.data;
      return response;
    })
  }

  this.findUserId = function(user, role) {
    if (role === 'teacher') {
      var teacher = this.teachers.find(function(element){
        return element.first_name === user.first_name && element.last_name === user.last_name
      })
      return teacher.teacher_id;
    } else if (role === 'student') {
      var student = this.students.find(function(element){
        return element.first_name === user.first_name && element.last_name === user.last_name
      })
      return student.student_id
    }
  }

  this.findStudentById = function(id){
    return this.students.find(function(element){
      return element.student_id === id
    })
  }

  this.getStudentData()
  this.getTeacherData()
  this.getClassData()
})
