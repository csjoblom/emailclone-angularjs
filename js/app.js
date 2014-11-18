angular.module('EmailApp',[
  'ngRoute'
]).config(function($routeProvider){
  'use strict';
  //configure urls
  $routeProvider
  //inbox route
    .when('/inbox',{
      templateUrl:'views/inbox.html',
      controller:'InboxCtrl',
    })
    .otherwise({
      redirectTo: '/inbox'
    });
});