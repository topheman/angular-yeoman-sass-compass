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
                $q.all([
                    getUserInfos(username),
                    getReposByUsername(username)
                ]).then(function(results){
                    if(results && results.length === 2 && results[0].data.login !== ""){
                        success({
                            user : results[0].data,
                            repos : results[1].data
                        });
                    }
                    else{
                        success(null);
                    }
                },function(e){
                    error(e);
                });
            };
            
            return {
                getReposByUsername : getReposByUsername,
                getUserInfos : getUserInfos,
                getUserInfosAndRepos : getUserInfosAndRepos
            };
            
        }];
        
    });
    
})();