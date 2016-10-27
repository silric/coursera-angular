
(function () {
'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService)
.constant('ApiBasePath', "https://rsilini-course5.herokuapp.com");


MenuDataService.$inject=['$http','ApiBasePath']
function MenuDataService($http,ApiBasePath) {
  var service = this;
  service.fname      ="";
  service.lname      ="";
  service.email      ="";
  service.phone      ="";
  service.favsname   ="";
  service.favname    ="";
  service.description="";
  service.getAllCategories=function() {
    return $http({
      method: "GET",
      url: ApiBasePath+"/categories.json"
    }).then(function (result) {
      return result.data;
    });
  };
  service.setInfo=function(info) {
    service.fname       =info.fname;
    service.lname       =info.lname;
    service.email       =info.email;
    service.phone       =info.phonenum;
    service.favsname    =info.favsname;
    service.favname     =info.favname;
    service.description =info.description;
  };
  service.getInfo=function() {
    var info = {
      fname:   service.fname,
      lname:   service.lname,
      phone:   service.phone,
      email:   service.email,
      favsname:    service.favsname,
      favname:     service.favname,
      description: service.description
    };
    return info;
  };
  service.getItem=function(shortName) {
    return $http({
      method: "GET",
      url: ApiBasePath+"/menu_items/"+shortName+".json"
    }).then(function (result) {
      console.log(result.data);
      return result;
    }, function (error) {
      console.log(error.status);
      return error;
    });
  };


}

})();
