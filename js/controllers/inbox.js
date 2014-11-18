/**
 * Controller: InboxCtrl
 */
angular.module('EmailApp')
  .controller('InboxCtrl', 
    function InboxCtrl ($scope,InboxFactory){
      'use strict';
      $scope.meta = {
        title: 'My Inbox'
      };
      InboxFactory.getMessages()
        .success(function(jsonData, statusCode){
          console.log('The Request was successful!', statusCode, jsonData);
          //console.dir(jsonData);
          //now add the email messages to the controller scope
          $scope.emails = jsonData;
        });
    });