var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']); // , 'ngAnimate' 

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/mealPlan', {
      title: 'Meal Plan',
      templateUrl: 'partials/mealPlan.html',
      controller: 'mealPlanCtrl'
    })
    .when('/carbs', {
      title: 'Carbs',
      templateUrl: 'partials/carbs.html',
      controller: 'carbCtrl'
    })
    .when('/noncarbs', {
      title: 'Non-Carbs',
      templateUrl: 'partials/nonCarbs.html',
      controller: 'nonCarbCtrl'
    })
    .when('/', {
      title: 'Combined',
      templateUrl: 'partials/combine.html',
      controller: 'combineCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });;
}]);
    