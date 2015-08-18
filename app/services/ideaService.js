var app = angular.module("main");
app.factory("ideaService", ['$http','baseUrl', function($http,baseUrl){
  return {
    add: function(datas){
      return $http.post(baseUrl+ "ideas", datas);
      // return $resource((baseUrl+ "ideas", datas));
    },
    getAll: function(){
      return $http.get(baseUrl+ "ideas");
    },
    getOne: function(id){
      return $http.get(baseUrl+ "ideas/"+id);
    },
    removeOne: function(id){
      return $http.delete(baseUrl+"ideas/"+id);
    },
    update: function(id){
      return $http.put(baseUrl+"ideas/"+id);
    }
  }
}]);
