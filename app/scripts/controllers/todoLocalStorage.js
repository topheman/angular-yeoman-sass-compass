'use strict';

angular.module('angularYeomanSassCompassApp')
        .controller('TodoLocalStorageCtrl', [
            '$scope',
            'localStorageService',
            function($scope,localStorageService) {
                //local storage support
                
                //first load what's in local storage
                $scope.todos = localStorageService.get('todoLocalStorage-todos') || [];
                $scope.currentTodo = localStorageService.get('todoLocalStorage-currentTodo') || "";
                
                //then watch any changes and update the local storage
                $scope.$watchCollection('todos',function(newValue,oldValue){
                    console.log('todos',newValue,oldValue);
                    localStorageService.add('todoLocalStorage-todos',newValue);
                });
                $scope.$watch('currentTodo',function(value){
                    console.log('currentTodo',value);
                    localStorageService.add('todoLocalStorage-currentTodo',value);
                });
                
                //then, this is exactly the same code as before
                $scope.showTodo = function() {
                    window.alert($scope.currentTodo !== "" ? $scope.currentTodo : "You didn't type anything");
                };
                $scope.addTodo = function() {
                    if ($scope.currentTodo !== "") {
                        $scope.todos.push($scope.currentTodo);
                        $scope.currentTodo = "";
                    }
                    else {
                        window.alert("You didn't type anything");
                    }
                };
                $scope.remove = function($index) {
                    $scope.todos.splice($index, 1);
                };
            }]);
