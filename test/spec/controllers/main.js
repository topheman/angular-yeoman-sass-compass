'use strict';

describe('Controller: MainCtrl', function() {

    // load the controller's module
    beforeEach(module('angularYeomanSassCompassApp'));

    var MainCtrl,
            scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should have some links in the scope', function() {
        expect(scope.links.length).toBeGreaterThan(0);
    });
});
