(function(){
'use strict';

var helpers = {
    initGithubUser : function(data, $scope){
        $scope.githubUserFound = true;
        console.log(data);
    },
    resetGithubUser : function($scope){
        $scope.githubUserFound = false;
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
                                    helpers.initGithubUser(data,$scope);
                                }
                                else{
                                    helpers.resetGithubUser($scope);
                                }
                            })
                            .error(function(){
                                helpers.resetGithubUser($scope);
                            });
                    },350);
                }
                else{
                    helpers.resetGithubUser($scope);
                }
            });
        }]);
    
})();