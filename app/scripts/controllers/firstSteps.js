'use strict';

angular.module('angularYeomanSassCompassApp')
        .controller('FirstStepsCtrl', function($scope) {
            $scope.showYourNameOrWhatever = function(){
                window.alert($scope.yourNameOrWhatever !== "" ? $scope.yourNameOrWhatever : "You didn't type anything");
            };
        });
