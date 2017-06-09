angular.module('myApp').directive('searchByTopic', function(){
  return {
    templateUrl: "views/searchByTopic.html",
    restrict: "E",
    scope: {
      topics: "=",
      topicFilter: "="
    },
    controller: function($scope) {
      $scope.changeFilter = function(filter) {
        if ($scope.topicFilter === filter) {
          $scope.topicFilter = ""
        } else {
          $scope.topicFilter = filter;
        }
      }
    }
  }
})
