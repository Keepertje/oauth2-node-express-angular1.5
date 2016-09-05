"use strict";
angular.module('routespiration',['ngComponentRouter'
                ,'how',"search","login"])
.value('$routerRootComponent', 'app')

.component('app', {
  template:
    ' <button ng-click="$ctrl.login()" class="stravaButton"></button>' +
    '<nav>' +
    '  <a ng-link="[\'How\']">How page</a>' +
    '  <a ng-link="[\'Search\']">Search page</a>' +
    '</nav>' +
    '<ng-outlet></ng-outlet>',
  controller:MainComponent,
  $routeConfig: [
    {path: '/how', name: 'How', component: 'how', useAsDefault: true},
    {path: '/search', name: 'Search', component: 'search' },
      {path: '/callback', name: 'Callback', component: 'login' }
  ]
});

function MainComponent($window){

  var $ctrl = this;

  $ctrl.login = function(){
      $window.location.href = "https://www.strava.com/oauth/authorize?client_id=<CLIENT_ID>+&response_type=code&redirect_uri=http://localhost:3000/callback";
              
  }
}
