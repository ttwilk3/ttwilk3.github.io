(function() {
'use strict';

angular.module('data')
.controller('ItemsComponentController', ItemsComponentController);

ItemsComponentController.$inject = ['items'];
function ItemsComponentController(items) {
	let itemsContr = this;
	itemsContr.items = items.data.menu_items;
	// console.log(itemsContr.items);	
};

})();