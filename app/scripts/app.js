'use strict';

angular.module('angularYeomanSassCompassApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'LocalStorageModule',
    'githubModule'
])
        .config(['$routeProvider', 'localStorageServiceProvider', function($routeProvider, localStorageServiceProvider) {
                $routeProvider
                        .when('/', {
                            templateUrl: 'views/main.html',
                            controller: 'MainCtrl'
                        })
                        .when('/first-steps', {
                            templateUrl: 'views/first-steps.html',
                            controller: 'FirstStepsCtrl'
                        })
                        .when('/todo-local-storage', {
                            templateUrl: 'views/todo-local-storage.html',
                            controller: 'TodoLocalStorageCtrl'
                        })
                        .when('/github', {
                            templateUrl: 'views/github.html',
                            controller: 'GithubCtrl'
                        })
                        .otherwise({
                            redirectTo: '/'
                        });
                //config the localStorage service
                localStorageServiceProvider.setPrefix('aysc');
            }
        ]);
