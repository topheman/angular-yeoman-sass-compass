'use strict';

describe('Controller: GithubCtrl', function() {

    // load the controller's module
    beforeEach(module('angularYeomanSassCompassApp'));

    var GithubCtrl,
            scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        GithubCtrl = $controller('GithubCtrl', {
            $scope: scope
        });
    }));

    it('hello', function() {
        expect(true).toBe(true);
    });
});
