var app = angular.module("main")

app.controller("mainCtrl",['$scope','ideaService','channelService','remarkService', function($scope,ideaService,channelService,remarkService){
    ideaService.getAll()
      .success(function(data){
        $scope.ideas = data;
        console.log($scope.ideas)
      })


      $scope.addIdea = function(data){
        ideaService.add(data)
          .success(function(data){
            $scope.ideas.push(data)
          })
      }
}])
