'use strict';

angular.module('searchPageApp')
  .controller('MainCtrl', function ($scope, sites) {

    $scope.searchText = 'text';
    $scope.searchSiteOptions = sites;
    $scope.searchSite = $scope.searchSiteOptions[0];

    $scope.search = function() {
      var site = $scope.searchSite;
      var postfix = site.params,
          query = $scope.searchText + " " + postfix,
          url = site.url.replace('{{query}}', query);
      // console.log("url: " + url); 
      window.open(url, '_blank');
    };
  });
