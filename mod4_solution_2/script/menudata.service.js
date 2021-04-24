(function() {
'use strict';

angular.module('data', [])
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
	let service = this;

	service.getAllCategories = function() {
		return $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/categories.json"
			});
	};

	service.getItemsForCategory = function(categoryShortName) {
		// console.log(categoryShortName);
		let appendedUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName.categoryId;
		return $http({
				method: "GET",
				url: appendedUrl
			});
	};

};

})();