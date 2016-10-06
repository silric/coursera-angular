(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItems)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

function FoundItems() {
  var ddo={
    templateUrl: 'foundItem.html',
    scope : {
      found: '<',
      onRemove: '&'
    }
    
  };
  return ddo;
}

NarrowItDownController.$inject=['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
  var menu=this;
  menu.searchTerm="";
  menu.GetItems=function() {
   console.log("searchTerm is "+menu.searchTerm);
    var promise=MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    promise.then(function (response) {
      menu.items=response;
      console.log(response);
    }).catch(function (error) {
      console.log("Something went wrong");
    });
  } 
  menu.removeItem=function(idx) {
    menu.items.splice(idx,1);
  }
}
MenuSearchService.$inject=['$http','ApiBasePath']
function MenuSearchService($http,ApiBasePath) {
  var service = this;
  service.getMatchedMenuItems=function(searchTerm) {
    return $http({
      method: "GET",
      url: ApiBasePath+"/menu_items.json"
    }).then(function (result) {
      var found=[];
      var i;
      for (i=0;i<result.data.menu_items.length;i++) {
        if (result.data.menu_items[i].description.match(searchTerm)) {
          found.push(result.data.menu_items[i]);
        }
      }
      return found;
    });
  };
}


})();
