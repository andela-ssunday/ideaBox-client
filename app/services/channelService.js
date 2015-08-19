var app = angular.module("main");

app.factory("channelService", ['$http','baseUrl', function($http,baseUrl){
  return {
    add: function(data){
      return $http.post(baseUrl+ "api/v1/channels", data)
    },
    getAll: function(){
      return $http.get(baseUrl + "api/v1/channels");
    },
    getOne: function(id){
      return $http.get(baseUrl+ "api/v1/channels/"+id);
    },
    removeOne: function(id){
      return $http.delete(baseUrl+"api/v1/channels/"+id);
    },
    update: function(id){
      return $http.put(baseUrl+"api/v1/channels/"+id);
    }
  }
}])
