(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo'];
function MyInfoController(userInfo) {
  let myInfo = this;
  myInfo.user = userInfo;
  myInfo.basePath = "https://twilki15-course5.herokuapp.com/";
  // console.log(myInfo.user);

  myInfo.notRegistered = angular.equals(myInfo.user, {}) ? true : false;

}

})();
