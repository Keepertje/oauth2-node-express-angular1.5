angular.module('myapp')
    .factory('loginService',function($http, $q, userService){
    var loginUrl = '/api/login';
 
   loginUser = function(code){
        
         var login = $http.get(loginUrl + '/' + code).then(function(response){
            var data = response.data;
             if(data.access_token !== undefined && data.access_token !== null){   
                userService.setToken(data.access_token)
             }
         })
 
         return login;
    }
    return {
      loginUser:loginUser
     };
});