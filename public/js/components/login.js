angular.module('login', [])
  .component('login', {
    template: '<div>Login page</div>',
    controller:LoginComponent

  })

function LoginComponent($location,loginService){

    //get the code from the url
    var code = $location.search().code;
  loginService.loginUser(code).then(function(data){
    console.log(data)
  })
    //login the user then go to the search page.

}



 // /callback?state=&code=ecb7cbd856902dc38c75867df6ddf7227464872e