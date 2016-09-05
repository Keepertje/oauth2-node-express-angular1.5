angular.module('search', [])
  .component('search', {
    template: '<div>Welkom on the page {{$ctrl.userToken}}</div>',
    controller:SearchComponent

  })

function SearchComponent(userService){
  $ctrl = this;
  $ctrl.userToken = userService.getToken();
}
