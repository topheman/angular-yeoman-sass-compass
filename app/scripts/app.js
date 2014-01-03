'use strict';

angular.module('angularYeomanSassCompassApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/first-steps', {
        templateUrl: 'views/first-steps.html',
        controller: 'FirstStepsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
