var app = angular.module("main");

app.factory("channelService", ['$http','baseUrl', function($http,baseUrl){
  return {
    add: function(data){
      return $http.post(baseUrl+ "channels", data)
    },
    getAll: function(){
      return $http.get(baseUrl + "channels");
    },
    getOne: function(id){
      return $http.get(baseUrl+ "channels/"+id);
    },
    removeOne: function(id){
      return $http.delete(baseUrl+"channels/"+id);
    },
    update: function(id){
      return $http.put(baseUrl+"channels/"+id);
    }
  }
}])
