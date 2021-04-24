(function() {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'script/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();