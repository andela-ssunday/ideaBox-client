"use strict";
var app = angular.module("main",[])

  .config(['$httpProvider',  function($httpProvider, config){
    delete $httpProvider.defaults.headers.common["X-Requested-With"];

  }
])
