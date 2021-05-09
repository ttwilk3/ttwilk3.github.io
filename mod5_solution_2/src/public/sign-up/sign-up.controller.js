(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  let signUp = this;
  signUp.completed = false;
  signUp.validShortName = false;

  signUp.validateShortName = function() {
  	signUp.validShortName = false;
  	signUp.user.favoriteDish = {};
  	SignUpService.getItemsForCategory(signUp.user.shortName).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    console.log(response);
    signUp.validShortName = true;
    signUp.user.favoriteDish = response.data;
    console.log(signUp);
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log(response);
    signUp.validShortName = false;
    console.log(signUp);
  });
  }

  signUp.submit = function () {
    signUp.completed = true;
    // console.log(signUp.user);
    SignUpService.setUserInfo(signUp.user);

  };
}

})();
