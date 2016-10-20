(function() {
'use strict'

angular.module('restaurant')
.controller('SignUpController',SignUpController);
function SignUpController () {
  var ctrl=this;
  ctrl.submit = function () {
    ctrl.completed=true;
  }
}


})();
