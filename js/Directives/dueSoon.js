angular.module('myApp').directive('dueSoon', function(){
  return {
    templateUrl: "views/dueSoon.html",
    restrict: "E",
    scope: {
      course: "="
    }
  }
})
