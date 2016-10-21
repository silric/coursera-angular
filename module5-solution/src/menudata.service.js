
(function () {
'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService)
.constant('ApiBasePath', "https://rsilini-course5.herokuapp.com");


MenuDataService.$inject=['$http','ApiBasePath']
function MenuDataService($http,ApiBasePath) {
  var service = this;
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
