'use strict';

angular.module('angularYeomanSassCompassApp')
        .controller('MainCtrl', function($scope) {
            $scope.links = [
                {"text": "Home", "href": "/"},
                {"text": "Firt steps", "href": "/first-steps"}
            ];
        });
