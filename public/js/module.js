"use strict";
angular.module('routespiration',['ngComponentRouter'
                ,'how',"search"])
.value('$routerRootComponent', 'app')

.component('app', {
  template:
    '<nav>' +
    '  <a ng-link="[\'How\']">How page</a>' +
    '  <a ng-link="[\'Search\']">Search page</a>' +
    '</nav>' +
    '<ng-outlet></ng-outlet>',
  $routeConfig: [
    {path: '/how', name: 'How', component: 'how', useAsDefault: true},
    {path: '/search', name: 'Search', component: 'search' }
  ]
});