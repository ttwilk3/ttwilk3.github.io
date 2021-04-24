(function() {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'script/templates/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'script/templates/categories.template.html',
    controller: 'CategoriesComponentController as catContr',
    resolve: {
    	categories: ['MenuDataService', function (MenuDataService) {
    		return MenuDataService.getAllCategories()
    		.then(function(response) {
    			return response;
    		});
    	}]
    }
  })

  // Items page
  .state('items', {
    url: '/items/{categoryId}',
    templateUrl: 'script/templates/items.template.html',
    controller: 'ItemsComponentController as itemsContr',
    resolve: {
    	items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
    		return MenuDataService.getItemsForCategory($stateParams)
    		.then(function(response) {
    			return response;
    		});
    	}]
    }
  });
}

})();