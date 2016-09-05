"use strict";
angular.module('myapp', ['ngComponentRouter', 'ngStorage',"callback","search","how"])
  .value('$routerRootComponent', 'app')

  .component('app', {
    template:
    ' <button ng-if="$ctrl.$storage.userToken === undefined" ng-click="$ctrl.login()">LOG IN</button>' +
    '<nav>' +
    ' <a ng-link="[\'How\']">How</a>' +
    ' <a ng-if="$ctrl.$storage.userToken !== undefined" ng-link="[\'Search\']">Search</a>' +
    '</nav><div>' +
    '<ng-outlet></ng-outlet>' + 
    '</div>',
    controller: MainComponent,
    $routeConfig: [
      { path: '/how', name: 'How', component: 'how', useAsDefault: true },
      { path: '/search', name: 'Search', component: 'search' },
      { path: '/callback', name: 'Callback', component: 'callback' }
    ]
  });


function MainComponent($window, $localStorage) {

  var $ctrl = this;
  $ctrl.$storage = $localStorage;

  $ctrl.login = function () {
    $window.location.href = "https://www.strava.com/oauth/authorize?client_id=13016+&response_type=code&redirect_uri=http://localhost:3000/callback";

  }
}