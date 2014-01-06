'use strict';

describe('Controller: FirstStepsCtrl', function() {

    // load the controller's module
    beforeEach(module('angularYeomanSassCompassApp'));

    var FirstStepsCtrl,
            scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        FirstStepsCtrl = $controller('FirstStepsCtrl', {
            $scope: scope
        });
    }));

    it('should have todos and currentTodo in the scope', function() {
        expect(scope.todos instanceof Array).toBe(true);
        expect(typeof scope.currentTodo).toBe("string");
    });

    it('should add currentTodo to todos', function() {
        scope.$apply(function() {
            scope.currentTodo = "Test task";
        });
        expect(scope.currentTodo).toBe('Test task');
        scope.$apply(function(){
            scope.addTodo();
        });
        expect(scope.todos).toEqual(['Test task']);
        expect(scope.currentTodo).toBe('');
    });
});
