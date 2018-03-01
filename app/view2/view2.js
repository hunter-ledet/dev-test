'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, $location, playerService) {

  $scope.allInfo;

  $scope.go = function ( path ) {
    $location.path( path );
    $scope.allInfo = playerService.finishUp();
  };

  this.maintain = function ( team, location, description, twitter, facebook, instagram ) {
    playerService.maintainView2( team, location, description, twitter, facebook, instagram );
  }

});