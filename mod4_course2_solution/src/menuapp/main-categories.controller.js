(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController', MainCategoriesController);


MainCategoriesController.$inject = ['MenuDataService','items'];
function MainCategoriesController(MenuDataService,items) {
  var mainCategories = this;
 
  mainCategories.items = items;

}

})();
