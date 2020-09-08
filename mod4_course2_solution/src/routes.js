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
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('mainCategories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/maincategories.template.html',
    controller: 'MainCategoriesController as mainCategories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();     
        
      }]
    }
  })

  // // Item detail
  .state('itemsCategories', {
     url: '/items/{catSN}',
     templateUrl: 'src/menuapp/templates/mainitem.template.html',
     controller: 'MainItemsController as mainItems',
     params: {
       catSN: null
     },
     resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
       return MenuDataService.getItemsForCategory($stateParams.catSN);     
        
      }]
    }
   });

}