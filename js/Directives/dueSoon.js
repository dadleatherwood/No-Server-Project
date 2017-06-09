angular.module('myApp').directive('dueSoon', function(){
  return {
    templateUrl: "views/dueSoon.html",
    restrict: "E",
    scope: {
      course: "=",
      assignmentFilter: "="
    },
    controller: function($scope) {
      $scope.changeFilter = function(filter) {
        if ($scope.assignmentFilter === filter) {
          $scope.assignmentFilter = ""
        } else {
          $scope.assignmentFilter = filter;
        }
      }
    }
  }
})
