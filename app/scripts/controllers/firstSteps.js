'use strict';

angular.module('angularYeomanSassCompassApp')
        .controller('FirstStepsCtrl', function($scope) {
            //init default values
            $scope.todos = [];
            $scope.currentTodo = "";
            //code
            $scope.showTodo = function(){
                window.alert($scope.currentTodo !== "" ? $scope.currentTodo : "You didn't type anything");
            };
            $scope.addTodo = function(){
                if($scope.currentTodo !== ""){
                    $scope.todos.push($scope.currentTodo);
                    $scope.currentTodo = "";
                }
                else{
                    window.alert("You didn't type anything");
                }
            };
            $scope.remove = function($index){
                $scope.todos.splice($index,1);
            };
        });
