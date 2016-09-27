(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought=this;
  bought.emptyMsg= ShoppingListCheckOffService.getBoughtEmptyMsg();
  bought.list=ShoppingListCheckOffService.boughtGet();
  bought.isEmpty=function() {
    return bought.list.length===0;
  };
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy= this;
  buy.list=ShoppingListCheckOffService.toBuyGet();
  buy.itemName="";
  buy.itemQuantity="";
  buy.isEmpty=function() {
    return buy.list.length===0;
  };


  buy.remove = function (itemIndex) {
    try {
      ShoppingListCheckOffService.toBuyRemove(itemIndex);
      buy.emptyMsg= ShoppingListCheckOffService.getBuyEmptyMsg();
    } catch (error) {
      buy.errorMessage = error.message;
    }
  }
}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
var toBuyItems= [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Berries",
    quantity: "6"
  }
];
var boughtItems=[];


  service.toBuyRemove= function (itemIndex) {
    var itemName=toBuyItems[itemIndex].name;
    var itemQuantity=toBuyItems[itemIndex].quantity;
    var item = {
        name: itemName,
        quantity: itemQuantity
    };
    boughtItems.push(item);
    toBuyItems.splice(itemIndex, 1);
  };
  service.toBuyGet = function () {
    return toBuyItems;
  };
  service.boughtGet= function () {
    return boughtItems;
  };
  service.getBoughtEmptyMsg=function() {
    return boughtItems.length>0 ? "" : "Nothing bought yet.";
  };
  service.getBuyEmptyMsg=function() {
    return toBuyItems.length>0 ? "" : "Everything is bought!";
  };

}



})();
