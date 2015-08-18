var app = angular.module("main")

app.controller("mainCtrl",['$scope','ideaService','channelService','remarkService', function($scope,ideaService,channelService,remarkService){
    ideaService.getAll()
      .success(function(data){
        $scope.ideas = data;
        console.log($scope.ideas)
      })
    channelService.getAll()
      .success(function(data){
        $scope.channels = data;
        console.log($scope.channels)
      })
}])
