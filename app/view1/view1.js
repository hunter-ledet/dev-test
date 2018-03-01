'use strict';

angular.module('myApp.view1', [('ngRoute')])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', function($scope, $location, playerService) {

    $scope.go = function ( path ) {
      $location.path( path );
    };

    this.maintain = function ( name, nationality, gender, sport, bday ) {
      playerService.maintainView1(name, nationality, gender, sport, bday);
      playerService.finishUp();
    };

    this.sports = ["Golf", "Tennis", "Cricket", "Basketball", "Baseball", "American Football", "Aquatics", "Archery", "Automobile Racing", "Badminton", "Beach Volleyball",
    "Bobsleigh", "Body Building", "Boxing", "Cross Cuntry Running", "Cross Country Skiing", "Curling", "Cycling", "Darts", "Decathlon", "Down Hill Skiing", "Equestianism", "eSports", "Fencing", "Field Hockey",
    "Figure Skating", "Gymnastics", "Ice Hockey", "Martial Arts", "Mixed Martial Arts", "Modern Pentathlon", "Motorcycle Racing", "Netball", "Polo", "Racquetball", "Rowing", "Rugby", "Sailing", "Softball", "Shooting", 
    "Skateboarding", "Skeet Shooting", "Skeleton", "Snow Boaring", "Soccor (Football)", "Squash", "Surfing", "Swimming", "Track and Field"];
  });