(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController ($scope, $filter) {
	$scope.lunchItems = "";
	$scope.lunchItemCount = 0;

	$scope.checkIfTooMuch = function () {
		let items = [];
		items = $scope.lunchItems.split(',');
		// console.log(items);
		let count = 0;
		for (let i = 0; i < items.length; i++) {
			if(!items[i].replace(/ /g, '').length == 0) {
				count++;
			}
		}
		//console.log(count);
		$scope.lunchItemCount = count;

		if ($scope.lunchItemCount == 0) {
			$scope.lunchMessage = "Please enter data first."
		}
		else if ($scope.lunchItemCount <= 3) {
			$scope.lunchMessage = "Enjoy!";
		} else {
			$scope.lunchMessage = "Too Much!";
		}
	};

	$scope.getMessageStyle = function () {
		let styles = {}
		if ($scope.lunchItemCount == 0 && $scope.lunchMessage == "Please enter data first.") {
        	styles['color'] = 'DarkRed';
        	styles['border'] = '1px solid DarkRed';
    	}
        else if ($scope.lunchItemCount > 0) {
        	styles['color'] = 'ForestGreen';
        	styles['border'] = '1px solid ForestGreen';
    	}
        return styles;
	};
}

})();