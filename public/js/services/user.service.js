angular.module('routespiration')
    .factory('userService',function($http){


    var user = {};
    var userToken = "";

    setUser = function(userInput){
        console.log('setting user ', userInput)
        user = userInput;
    }

    getUser = function(){
        console.log('the user ', user)
        return user;
    }

    setToken = function(token){
        userToken = token
    }
    getToken = function(){
        return userToken;
    }
    return {
      getUser:getUser,
      getToken:getToken,
      setUser:setUser,
      setToken:setToken
     };
});