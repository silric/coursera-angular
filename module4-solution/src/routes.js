( function() {
'use strict';
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home',{
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })
  .state('categories',{
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoriesController as Cgories',
    resolve: {
      cgories: ['MenuDataService',function(MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('catsDetail',{
    url: '/items/{catId}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsController as Itms',
    resolve: {
      itms: ['$stateParams','MenuDataService',function($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.catId);
      }]
    }
  });
}

})();
