(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {


	$scope.menu = "";

	$scope.CheckMenu = function () {
		
		if ($scope.menu.length == 0)
		{
			$scope.Message = "Please enter data first"; 
		}
		else
		{
		var menu_items = $scope.menu.split(',');
		
		if (menu_items.length<=3)
		{
			$scope.Message = "Enjoy!";
		}
		else
		{
			$scope.Message = "Too much!";
		}
		}
			
	}
}

})();

