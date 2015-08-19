'use strict';
app.factory("remarkService", ['$http','baseUrl', function($http,baseUrl){
  return {
    add: function(data){
      return $http.post(baseUrl+ "api/v1/ideas/:idea_id/remarks", data)
    },
    getByIdea: function(id){
      return $http.get(baseUrl+ "api/v1/ideas/"+id+"/remarks");
    },
    getOne: function(ideaId, remarkId){
      return $http.get(baseUrl+ "api/v1/ideas/"+ideaId+"/remarks/"+remarkId);
    },
    removeOne: function(ideaId, remarkId){
      return $http.delete(baseUrl+ "api/v1/ideas/"+ideaId+"/remarks/"+remarkId);
    },
    update: function(ideaId, remarkId){
      return $http.put(baseUrl+ "api/v1/ideas/"+ideaId+"/remarks/"+remarkId);
    }
  }
}]);
