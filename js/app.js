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
    //   controller: 'loginController'
    // })
    .state('student', {
      url: '/student/:id',
      templateUrl: 'views/student-dashboard.html',
      controller: 'studentCtrl'
    })

    .state('teacher', {
      url: '/teacher/:id',
      templateUrl: 'views/teacher-dashboard.html'
    })

    .state('studentClassPage', {
      url: '/studentCourse/:id',
      templateUrl: "views/student-classpage.html"
    })




})
