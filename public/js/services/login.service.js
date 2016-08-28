angular.module('routespiration')
    .factory('loginService',function($http, userService){


    var loginUrl = '/api/login';


    loginUser = function(){
        return $http.get(loginUrl)
    }

    getUser = function(code){
       return $http.get(loginUrl + '/' + code)
          
    }

    return {
      loginUser:loginUser,
      getUser:getUser
     };
});