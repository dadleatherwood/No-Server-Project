angular.module('myApp').directive('assignmentFeed', function(){
  return {
    templateUrl: "views/assignmentFeed.html",
    restrict: "E",
    scope: {
      assignmentFilter: "=",
      topicFilter: "=",
      assignments: "="
    },
  }
})
