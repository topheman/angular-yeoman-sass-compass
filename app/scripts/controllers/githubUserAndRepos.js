(function(){
'use strict';

var helpers = {
    initGithubUserAndRepos : function(data, error, $scope){
        $scope.githubUser = data.user;
        $scope.githubRepos = data.repos;
        $scope.error = error;
        console.log(data);
    },
    resetGithubUserAndRepos : function($scope, error){
        $scope.githubUser = null;
        $scope.githubRepos = null;
        $scope.error = typeof error === 'undefined' ? null : (error.message ? error : error.data ? error.data : null);
        console.log($scope.error);
    }
};

angular.module('angularYeomanSassCompassApp')
        .controller('GithubUserAndReposCtrl', ['$scope','$timeout','githubService',function($scope,$timeout,githubService) {
            var timeout;
            $scope.githubUsername = "";
            $scope.githubRepos = [];
            $scope.$watch('githubUsername',function(newValue){
                if(newValue){
                    if(timeout){
                       $timeout.cancel(timeout);
                    }
                    timeout = $timeout(function(){
                        githubService.getUserInfosAndRepos(newValue,function(data){
                            helpers.initGithubUserAndRepos(data, null, $scope);
                        }, function(error){
                            helpers.resetGithubUserAndRepos($scope, error);
                        });
                    },350);
                }
                else{
                    helpers.resetGithubUserAndRepos($scope);
                }
            });
        }]);
    
})();