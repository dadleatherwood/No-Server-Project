angular.module('myApp').directive('navBar', function(){
  return {
    templateUrl: "views/navBar.html",
    restrict: 'E',
    scope: {
      role: '='
    }
  }
})
