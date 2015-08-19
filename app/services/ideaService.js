var app = angular.module("main");
app.factory("ideaService", ['$http','baseUrl', function($http,baseUrl){

  return {
    add: function(datas){
      return $http({
       method: 'POST',
       url: baseUrl+ "api/v1/ideas",
       headers: {
         'Content-Type': undefined
       },
       data: datas
      });
    },
    getAll: function(){
      return $http.get(baseUrl+ "api/v1/ideas/");
    },
    getOne: function(id){
      return $http.get(baseUrl+ "api/v1/ideas/"+id);
    },
    removeOne: function(id){
      return $http.delete(baseUrl+"api/v1/ideas/"+id);
    },
    update: function(id){
      return $http.put(baseUrl+"api/v1/ideas/"+id);
    }
  }
}]);
