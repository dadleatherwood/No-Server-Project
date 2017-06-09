angular.module('myApp',['ui.router'])

.config(function($stateProvider,$urlRouterProvider){

  $urlRouterProvider
    .otherwise('/')

  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'views/login-form.html'
    })

    // .state('login', {
    //   url: '/login',
    //   templateUrl: 'views/login-form.html',
    // })
    .state('student', {
      url: '/student/:id',
      templateUrl: 'views/student-dashboard.html',
      controller: 'studentCtrl'
    })

    .state('teacher', {
      url: '/teacher/:id',
      templateUrl: 'views/teacher-dashboard.html',
      controller: 'teacherCtrl'
    })

    .state('studentClassPage', {
      url: '/studentCourse/:id',
      templateUrl: "views/student-classpage.html",
      controller: 'courseCtrl'
    })

    .state('teacherClassPage', {
      url: '/teacherCourse/:id',
      templateUrl: "views/teacher-classpage.html",
      controller: 'courseCtrl'
    })




})
