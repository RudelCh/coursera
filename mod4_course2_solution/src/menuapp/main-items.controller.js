(function () {
'use strict';

angular.module('MenuApp')
.controller('MainItemsController', MainItemsController);


MainItemsController.$inject = ['$stateParams','MenuDataService','items'];
function MainItemsController($stateParams,MenuDataService,items) {
  var mainItems = this;
  mainItems.items = items;
}

})();