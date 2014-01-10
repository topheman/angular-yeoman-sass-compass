'use strict';

angular.module('angularYeomanSassCompassApp')
        .controller('MainCtrl', function($scope) {
            $scope.links = [
                {"text": "Home", "href": "/"},
                {"text": "Firt steps", "href": "/first-steps"},
                {"text": "Todo list with localStorage support", "href": "/todo-local-storage"},
                {"text": "Github service example", "href": "/github"}
            ];
        });
