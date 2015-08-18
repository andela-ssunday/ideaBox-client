"use strict";
angular.module("main",[])

  .config(['$httpProvider', '$locationProvider', function($httpProvider, $locationProvider, config){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $locationProvider.html5Mode(false);
  }
])
