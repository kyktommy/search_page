'use strict';

angular.module('searchPageApp')
  .controller('MainCtrl', function ($scope) {

    $scope.searchText = 'text';
    $scope.searchSiteOptions = [
      {name: 'zippyshare', site: 'zippyshare.com'},
      {name: 'themeok', site: 'themeok.com'} 
    ];
    $scope.searchSite = $scope.searchSiteOptions[0];

    $scope.search = function() {
      // console.log("site: " + $scope.searchSite.site); 
      var query = $scope.searchText + " " + "site:" + $scope.searchSite.site;
      window.open("https://www.google.com.hk/search?q=" + query, '_blank');
    };
  });

// var json = {
//   name: 'zippyshare',
//   site: 'zippyshare.com',
//   prefix: 'https://www.google.com.hk/search?q='
// };
