(function(){
'use strict';

    var githubModule = angular.module('githubModule', []);
    
    githubModule.provider('githubService', function(){
            
        this.siteRoot = "https://api.github.com";
        
        this.$get = ['$http','$q',function($http,$q){
                
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
            
            var getUserInfosAndRepos = function(username, success, error){
                return $q.all([
                    getUserInfos(username),
                    getReposByUsername(username)
                ]).then(function(results){
                    
                },function(error){
                    
                });
            };
            
            return {
                getReposByUsername : getReposByUsername,
                getUserInfos : getUserInfos
            };
            
        }];
        
    });
    
})();