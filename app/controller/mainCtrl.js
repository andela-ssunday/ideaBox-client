var app = angular.module("main")

app.controller("mainCtrl",['$scope','ideaService','channelService','remarkService', function($scope,ideaService,channelService,remarkService){
    var colors = ['#47639E','crimson','green','black','brown']
    ideaService.getAll()
      .success(function(data){
        $scope.ideas = data;
        console.log($scope.ideas)
      })

       $scope.getColor = function(){
        return colors[Math.floor(Math.random()*4)];
       }

      $scope.addIdea = function(data){
        ideaService.add(data)
          .success(function(data){
            $scope.ideas.push(data)
          })
      }
}])
