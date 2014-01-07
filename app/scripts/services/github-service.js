(function(){
'use strict';

    var githubModule = angular.module('githubModule', []);
    
    githubModule.provider('githubService', function(){
            
        this.siteRoot = "https://api.github.com";
        
        this.$get = ['$http',function($http){
                
            var siteRoot = this.siteRoot;
            
            var getReposByUsername = function(username){
                return $http({
                    method : 'GET',
                    url : siteRoot+'/users/'+username+'/repos'
                });
            };
            
            var getUserInfos = function(username){
                return $http({
                    method : 'GET',
                    url : siteRoot+'/users/'+username
                });
            };
            
            return {
                getReposByUsername : getReposByUsername,
                getUserInfos : getUserInfos
            };
            
        }];
        
    });
    
})();