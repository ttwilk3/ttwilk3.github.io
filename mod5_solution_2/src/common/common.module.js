(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://twilki15-course5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
  $httpProvider.defaults.headers.get = {'Access-Control-Allow-Origin': '*'};
  $httpProvider.defaults.headers.post = {'Access-Control-Allow-Origin': '*'};
  //console.log($httpProvider.defaults.headers);
}

})();
