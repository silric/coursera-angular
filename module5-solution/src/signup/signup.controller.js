(function() {
'use strict'

angular.module('restaurant')
.controller('SignUpController',SignUpController);
SignUpController.$inject=['cgories','MenuDataService'];
function SignUpController(cgories,MenuDataService) {
  var ctrl=this;
  ctrl.cgories=cgories;
  ctrl.user = {
    fname:'',
    lname:'',
    email:'',
    description:'',
    favname:'',
    favsname:'',
    phonenum:''};
  ctrl.submit = function () {
    console.log("fname is "+ctrl.user.fname+" favorite short name "+ctrl.user.favsname);
    MenuDataService.getItem(ctrl.user.favsname) 
    .then(function(response) {


        console.log("was able to access short name "+ctrl.user.favsname);
        ctrl.found=1;
        ctrl.lookup_done=1;
        ctrl.allgood=1;
        ctrl.user.favname    =response.data.name;
        ctrl.user.description=response.data.description;
        MenuDataService.setInfo(ctrl.user);
    }, function(error) {
        console.log("error access short name "+ctrl.user.favsname);
        ctrl.found=0;
        ctrl.lookup_done=1;
        ctrl.allgood=0;
    });
  }
}


})();
