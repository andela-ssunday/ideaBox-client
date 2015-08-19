'use strict';
app.controller("mainCtrl",['$scope','ideaService','channelService','remarkService', function($scope,ideaService,channelService,remarkService){
    ideaService.getAll()
      .success(function(data){
        $scope.ideas = data;
      })

      $scope.addIdea = function(data){
        ideaService.add(data)
          .success(function(data){
            $scope.ideas.push(data)
          })
      }
}])
