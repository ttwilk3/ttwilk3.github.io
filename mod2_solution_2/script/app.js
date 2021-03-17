(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('totalPrice', totalPriceFilter);

ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService', 'totalPriceFilter'];

function ToBuyController ($scope, ShoppingListCheckOffService) {
	let ToBuy = this;

	ToBuy.items = ShoppingListCheckOffService.getToBuyItems();

	ToBuy.itemsEmpty = function() {
		return (ToBuy.items.length == 0 ? true : false);
	};

	ToBuy.buyItem = function(item, itemIndex) {
		ShoppingListCheckOffService.addBoughtItem(item, itemIndex);
	}
}

function AlreadyBoughtController ($scope, 
	ShoppingListCheckOffService, 
	totalPriceFilter) {
	let AlreadyBought = this;

	AlreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

	AlreadyBought.itemsEmpty = function() {
		return (AlreadyBought.items.length == 0 ? true : false);
	};
}

function ShoppingListCheckOffService() {
	let service = this;

	let toBuyItems = [
		{'name':'Cookie', 'quantity':10, 'pricePerItem':5},
		{'name':'Apple', 'quantity':37, 'pricePerItem':0.50},
		{'name':'Orange', 'quantity':15, 'pricePerItem':0.88},
		{'name':'Cake', 'quantity':1, 'pricePerItem':15},
		{'name':'Brownie', 'quantity':14, 'pricePerItem':3}
	];
	let boughtItems = [];


	service.addToBuyItem = function () {
		//toBuyItems.push(X);
	};

	service.getToBuyItems = function() {
		return toBuyItems;
	};

	service.addBoughtItem = function (item, itemIndex) {
		boughtItems.push(item);
		toBuyItems.splice(itemIndex, 1);
	};

	service.getBoughtItems = function() {
		return boughtItems;
	};
}

function totalPriceFilter() {
	return function(item) {
		let total_price = item.quantity * item.pricePerItem;
		return total_price;
	}
}

})();