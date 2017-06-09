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

  this.findUser = function(user, role) {
    if (role === 'teacher') {
      var teacher = this.teachers.find(function(element){
        return element.first_name === user.first_name && element.last_name === user.last_name
      })
      return teacher;
    } else if (role === 'student') {
      var student = this.students.find(function(element){
        return element.first_name === user.first_name && element.last_name === user.last_name
      })
      return student
    }
  }

  this.findStudentById = function(id){
    var student = this.students.find(function(element){
      return element.student_id === id
    })
    return student
  }

  this.findTeacherById = function(id){
    var teacher = this.teachers.find(function(element){
      return element.teacher_id === id
    })
    return teacher
  }

  this.findClass = function(class_id){
    var course = this.classes.find(function(element){
      return element.class_id === class_id
    })
    return course
  }

  this.getStudentData()
  this.getTeacherData()
  this.getClassData()
})
