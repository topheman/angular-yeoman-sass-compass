'use strict';

describe('Controller: GithubUserAndReposCtrl', function () {

  // load the controller's module
  beforeEach(module('angularYeomanSassCompassApp'));

  var GithubuserandrepoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GithubuserandrepoCtrl = $controller('GithubUserAndReposCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
