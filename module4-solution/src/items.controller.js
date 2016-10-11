(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController',ItemsController);

ItemsController.$inject=['MenuDataService','itms'];
function ItemsController(MenuDataService,itms) {
  var ctlr = this;
  ctlr.items=itms;
  console.log("menu items length is "+ctlr.items.length);
}

})();
