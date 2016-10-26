
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
  service.getItem=function(shortName) {
    var res = {
      data:"",
      status:""
    }
    return $http({
      method: "GET",
      url: ApiBasePath+"/menu_items/"+shortName+".json"
    }).then(function (result) {
      console.log(result.data);
      res.data=result.data;
      res.status=result.status
      return res;
    }, function (response) {
      console.log(response.data.status);
      res.status=response.data.status
      return res;
    });
  };


}

})();
