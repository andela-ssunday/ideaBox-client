'use strict';
app.factory("ideaService", ['$http','baseUrl', function($http,baseUrl){

  return {
    add: function(datas){
      return $http({
       method: 'POST',
       url: baseUrl+ "ideas",
       headers: {
         'Content-Type': undefined
       },
       data: datas
      });
    },
    getAll: function(){
      return $http.get(baseUrl+ "ideas/");
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
