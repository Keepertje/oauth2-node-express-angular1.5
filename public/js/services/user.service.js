angular.module('myapp')
    .factory('userService',function($http, $localStorage){
 
    isLoggedIn = function(){
        return($localStorage.user !== null);
    }
 
    setToken = function(token){
        $localStorage.userToken = token
       
    }
    getToken = function(){
        return $localStorage.userToken;
    }
    return {    
      getToken:getToken,   
      setToken:setToken,
      isLoggedIn:isLoggedIn 
     };
});