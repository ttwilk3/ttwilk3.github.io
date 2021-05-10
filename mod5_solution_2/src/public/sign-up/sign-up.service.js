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

	service.getMenuItem = function(shortName) {
		//console.log(shortName);
		let appendedUrl = "https://twilki15-course5.herokuapp.com/menu_items/" + shortName + ".json";

		return $http({
				method: "GET",
				url: appendedUrl
			});
	};
};

})();