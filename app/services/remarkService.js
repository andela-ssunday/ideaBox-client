var app = angular.module("main");
app.factory("remarkService", ['$http','baseUrl', function($http,baseUrl){
  return {
    add: function(data){
      return $http.post(baseUrl+ "remarks", data)
    },
    getByIdea: function(id){
      return $http.get(baseUrl+ "ideas/"+id+"/remarks");
    },
    getOne: function(ideaId, remarkId){
      return $http.get(baseUrl+ "ideas/"+ideaId+"/remarks/"+remarkId);
    },
    removeOne: function(ideaId, remarkId){
      return $http.delete(baseUrl+ "ideas/"+ideaId+"/remarks/"+remarkId);
    },
    update: function(ideaId, remarkId){
      return $http.put(baseUrl+ "ideas/"+ideaId+"/remarks/"+remarkId);
    }
  }
}]);
