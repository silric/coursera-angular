
(function() {
'use strict'

angular.module('restaurant')
.controller('myInfoController',myInfoController);
myInfoController.$inject=['info','MenuDataService'];
function myInfoController(info,MenuDataService) {
  var ctrl = this;
  ctrl.fname      =info.fname;
  ctrl.lname      =info.lname;
  ctrl.email      =info.email;
  ctrl.phone      =info.phone;
  ctrl.favsname   =info.favsname;
  ctrl.favname    =info.favname;
  ctrl.description=info.description;
}
})();
