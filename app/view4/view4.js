'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', function($scope, $location, playerService) {

  this.allInfo;

  this.gatherFromDB = async function () {
    // runs on init, gathers all stored information in DB and presents them to be checked out.
    playerService.gatherStore()
    .then(result => this.allInfo = result)
    .catch(err => console.error(err));
  }

  $scope.go = function ( path ) {
    $location.path( path );
  };

});