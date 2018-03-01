'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function($scope, $location, playerService) {

  this.allInfo;

  this.gather = function () {
    this.allInfo = playerService.finishUp();
  }

  this.submission = function (info) {
    playerService.createNewPlayer(info);
  }

  $scope.go = function ( path ) {
    $location.path( path );
  };

});