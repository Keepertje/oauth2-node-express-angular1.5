angular.module('callback', [])
  .component('callback', {
    controller:LoginComponent
  })
 
function LoginComponent($location,loginService,$rootRouter){
 
    var code = $location.search().code;
    loginService.loginUser(code).then(function(data){
     $rootRouter.navigate(['Search']);  0
    })
};