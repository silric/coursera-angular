
(function() {
'use strict';
angular.module('data')
.component('categories', {
  templateUrl: 'src/categories.html',  
  bindings: {
    cats: '<'
  }
});
})();
