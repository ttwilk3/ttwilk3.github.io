(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
MenuSearchService.$inject = ['$http'];

function NarrowItDownController ($scope, MenuSearchService) {
	let narrowDown = this;
	let term = "";
	narrowDown.found = [];
	narrowDown.findMenuItems = function (searchTerm) {
		narrowDown.found = [];
		narrowDown.nothingFound = true;

		if (searchTerm != "" && searchTerm != undefined) {
			let promise = MenuSearchService.getMatchedMenuItems(searchTerm);
			promise
			.then(function(response) {
				narrowDown.itemsEmpty = response.length == 0 ? true : false;
				narrowDown.found = response;
			});
		}
		else
		{
			narrowDown.itemsEmpty = true;
		}
	};

	narrowDown.removeItem = function(index) {
		narrowDown.found.splice(index, 1);
	};
};

function FoundItemsDirective() {
	let ddo = {
		templateUrl: 'foundItems.html',
		scope: {
			found: '<',
	        onRemove: '&'
		},
		controller: NarrowItDownController,
		controllerAs: 'narrowDown',
		bindToController: true
	};

	return ddo;
};


function MenuSearchService($http) {
	let service = this;

	service.getMatchedMenuItems = function (searchTerm) {
		
		return $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/menu_items.json"
			}).then(function (result) {
		    // process result and only keep items that match
		    let foundItems = [];
		    // console.log(result);
		    for (let i = 0; i < result.data.menu_items.length; i++) {
		    	if (result.data.menu_items[i].description.includes(searchTerm)) {
		    		foundItems.push(result.data.menu_items[i]);
		    	}
		    }
		    // console.log(foundItems);
		    // return processed items
		    return foundItems;
		});
	};
};

})();