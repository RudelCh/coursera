(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	// body...
  var bueList = this;

  bueList.items = ShoppingListCheckOffService.getBueItems();

  bueList.toBue = function (itemIndex) {
	ShoppingListCheckOffService.toBue(itemIndex);  	
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	// body...
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}




function ShoppingListCheckOffService()
{
	var service = this;

	var bueItems=[{
      name: "cookies",
      quantity: 10
    },
    {
      name: "eggs",
      quantity: 20
    },
    {
      name: "crisps",
      quantity: 2
    },
    {
      name: "bottles of water",
      quantity: 3
    },
    {
      name: "orange",
      quantity: 5
    }];

	var boughtItems=[];

	service.getBueItems = function () {
		return bueItems;
	}

	service.getBoughtItems = function () {
		return boughtItems;
	}

	service.toBue = function (itemIndex) {
		var redItem = bueItems[itemIndex]; 
		bueItems.splice(itemIndex, 1);
		boughtItems.push(redItem);		
	}
}

})();

