
(function () {
 'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };

  return ddo;
}


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.searchTerm = "";
    menu.found = [];
    menu.messNothingFound = 0;
    menu.toSearchMenuItems = function (searchTerm) {
      if (searchTerm.length==0)
      {
        menu.messNothingFound = 1;
        menu.found = [];        
      }
      else
      {
        menu.messNothingFound = 0;
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

        promise.then(function (response) {
        menu.found = response;
        if (response.length == 0)
        {
          menu.messNothingFound = 1;
        }
        })
        .catch(function (error) {
        });
      }
    };

    menu.removeItem = function (itemIndex) {
      menu.found.splice(itemIndex, 1);
    };
   }

   MenuSearchService.$inject = ['$http'];
   function MenuSearchService ($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function (response) {
        var foundItems=[];
        for (var i = 0; i < response.data.menu_items.length; i++) {
           var desc = response.data.menu_items[i].description;
           if (desc.indexOf(searchTerm) != -1)
           {
               foundItems.push(response.data.menu_items[i]);
           }
        
         }
        return foundItems; 

      });

      
    };

   }

})();

