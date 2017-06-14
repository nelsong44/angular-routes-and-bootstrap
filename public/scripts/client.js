console.log('JS linked');

// creating new angular module named 'myApp'
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider.when('/', {
    template: '<div id"main"><h2>Main Route</h2>',
    controller: 'MainController as main'
  }).when('/blobby', {
    templateUrl: 'views/partials/blobby.html',
    controller: 'BlobbyController as blobby'
  }).when('/marcel', {
    templateUrl: 'views/partials/marcel.html',
    controller: 'MarcelController as marcel'
  });
  console.log('in config');
}); // end config

// adding a controller to the app
myApp.controller('MainController', function() {
  console.log('NG linked'); //make sure angular is linked properly // NG will log in console once linked in HTMl
  var main = this;
});
