(function() {
'use strict';
angular.module('MenuApp')
.controller('CategoriesController',CategoriesController);
CategoriesController.$inject=['MenuDataService','cgories'];
function CategoriesController(MenuDataService,cgories) {
  var ctlr = this;
  this.cgories=cgories;
  console.log("cgories is "+cgories);
  console.log("cgories[0].name is "+cgories[0].name);
}

})();
