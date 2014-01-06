'use strict';

describe('Controller: TodoLocalStorageCtrl', function() {

    // load the controller's module
    beforeEach(module('angularYeomanSassCompassApp'));

    var TodoLocalStorageCtrl,
            scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        TodoLocalStorageCtrl = $controller('TodoLocalStorageCtrl', {
            $scope: scope
        });
    }));

    it('should have todos and currentTodo in the scope', function() {
        expect(scope.todos instanceof Array).toBe(true);
        expect(typeof scope.currentTodo).toBe("string");
    });

    it('should add currentTodo to todos and be saved into local storage', function() {
        
        //before
        localStorage.removeItem('aysc.todoLocalStorage-currentTodo');
        localStorage.removeItem('aysc.todoLocalStorage-todos');
        
        scope.$apply(function() {
            scope.currentTodo = 'Test task';
        });
        expect(scope.currentTodo).toBe('Test task');
        scope.$apply(function(){
            scope.addTodo();
        });
        expect(scope.todos).toEqual(['Test task']);
        expect(scope.currentTodo).toBe('');
        
        expect(localStorage.getItem('aysc.todoLocalStorage-currentTodo')).toBe('');
        expect(JSON.parse(localStorage.getItem('aysc.todoLocalStorage-todos'))).toEqual(['Test task']);
        
        //after
        localStorage.removeItem('aysc.todoLocalStorage-currentTodo');
        localStorage.removeItem('aysc.todoLocalStorage-todos');
    });
});
