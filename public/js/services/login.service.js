angular.module('routespiration')
    .factory('loginService',function($http, userService){


    var loginUrl = '/api/login';


    loginUser = function(code){
       return (
         $http.get(loginUrl + '/' + code).then((response) =>
         {
             console.log(response.data)
         })
       )
    }


    return {
      loginUser:loginUser
     };
});