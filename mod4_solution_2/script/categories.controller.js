(function() {
'use strict';

angular.module('data')
.controller('CategoriesComponentController', CategoriesComponentController);

CategoriesComponentController.$inject = ['categories'];
function CategoriesComponentController(categories) {
	let catContr = this;
	catContr.categories = categories.data;
	// console.log(catContr.categories);
};

})();