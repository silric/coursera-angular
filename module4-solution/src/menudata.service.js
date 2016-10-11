
(function () {
'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject=['$http','ApiBasePath']
function MenuDataService($http,ApiBasePath) {
  var service = this;
  service.getItemsForCategory=function(categoryShortName) {
    return $http({
      method: "GET",
      url: ApiBasePath+"/menu_items.json?category="+categoryShortName
    }).then(function (result) {
      console.log("the result.data is "+result.data);
      return result.data.menu_items;
    });
  };
  service.getAllCategories=function() {
    return $http({
      method: "GET",
      url: ApiBasePath+"/categories.json"
    }).then(function (result) {
      return result.data;
    });
  };
}

})();
