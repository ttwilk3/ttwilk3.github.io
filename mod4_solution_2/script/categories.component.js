(function() {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'script/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();