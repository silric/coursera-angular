(function() {
'use strict'

angular.module('restaurant')
.controller('SignUpController',SignUpController);
SignUpController.$inject=['cgories','MenuDataService'];
function SignUpController(cgories,MenuDataService) {
  var ctrl=this;
  var found=0;
  var lookup_done=0;
  ctrl.cgories=cgories;
  ctrl.user = {
    fname:'',
    lname:'',
    email:'',
    favsname:'',
    phonenum:''};
  ctrl.submit = function () {
    found=0;
    console.log("fname is "+ctrl.user.fname+" favorite short name "+ctrl.user.favsname);
    var menuItem=MenuDataService.getItem(ctrl.user.favsname);
    menuItem.then(function(response) {
      if (response.status!==200) {
        console.log("error access short name "+ctrl.user.favsname);
        found=0;
        lookup_done=1;
      } else {
        console.log("was able to access short name "+ctrl.user.favsname);
        lookup_done=1;
        found=1;
      };
    });
  }
}


})();
