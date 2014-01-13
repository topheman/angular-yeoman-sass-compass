(function(){
'use strict';

var helpers = {
    initGithubUser : function(data, error, $scope){
        $scope.githubUser = data;
        $scope.error = error;
        console.log(data);
    },
    resetGithubUser : function($scope, error){
        $scope.githubUser = null;
        $scope.error = typeof error === 'undefined' ? null : error;
    }
};

angular.module('angularYeomanSassCompassApp')
        .controller('GithubCtrl', ['$scope','$timeout','githubService',function($scope,$timeout,githubService) {
            var timeout;
            $scope.githubUsername = "";
            $scope.$watch('githubUsername',function(newValue){
                if(newValue){
                    if(timeout){
                       $timeout.cancel(timeout);
                    }
                    timeout = $timeout(function(){
                        githubService.getUserInfos(newValue)
                            .success(function(data){
                                if(data.login !== ""){
                                    helpers.initGithubUser(data, null, $scope);
                                }
                                else{
                                    helpers.resetGithubUser($scope);
                                }
                            })
                            .error(function(error){
                                helpers.resetGithubUser($scope, error);
                            });
                    },350);
                }
                else{
                    helpers.resetGithubUser($scope);
                }
            });
        }]);
    
})();