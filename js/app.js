angular.module('myApp',['ui.router'])

.config(function($stateProvider,$urlRouterProvider){

  $urlRouterProvider
            .otherwise('/')

  $stateProvider

    .state('Home', {
      url: '/',
      templateUrl:
    })

    .state('teacherSignUp', {
      url: '/teacherSignUp',
      templateUrl:  'views/teacher-signup.html'
    })

    .state ('studentSignUp', {
      url: '/studentSignUp',
      templateUrl: 'views/student-signup.html'
    })

    .state ('parentSignUp', {
      url: '/parentSignUp',
      templateUrl: 'views/parent-signup.html'
    })

    }
})
