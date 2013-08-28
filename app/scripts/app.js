'use strict';

var app = angular.module('searchPageApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.factory('sites', function() {
  var sites = [
    {
      name: 'zippyshare',
      params: 'site:zippyshare.com',
      url: 'https://www.google.com.hk/search?q={{query}}'
    },
    {
      name: 'wowebook',
      params: 'site:wowebook.info',
      url: 'https://www.google.com.hk/search?q={{query}}'
    }
  ];
  return sites; 
});
