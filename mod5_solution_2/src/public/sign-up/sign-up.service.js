(function() {
'use strict';

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http'];
function SignUpService($http) {
	let service = this;
	service.user = {};

	service.setUserInfo = function(userInfo) {
		service.user = userInfo;
		//console.log(service.user);
	}

	service.getUserInfo = function() {
		return service.user;
	}

	service.getItemsForCategory = function(categoryShortName) {
		console.log(categoryShortName);
		// https://twilki15-course5.herokuapp.com/menu_items/SHORT-NAME.json
		let appendedUrl = "https://twilki15-course5.herokuapp.com/menu_items/" + categoryShortName + ".json";
		return $http({
				method: "GET",
				url: appendedUrl
			});
	};
};

})();