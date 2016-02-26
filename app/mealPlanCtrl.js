app.controller('mealPlanCtrl', function ($scope) { //, $modal, $filter, $http
	
	
$scope.meals = [
	{seq:"1", name:"Breakfast", time:"7:30-8:30 a.m." , servings:"2 (30g)"},
	{seq:"2", name:"Snack *optional", time:"10:00 a.m." , servings:"1 (15g)"},
	{seq:"3", name:"Noon Meal", time:"11:30 - 12:30" , servings:"3-4 (45-60g)"},
	{seq:"4", name:"Snack", time:"2:00-3:00 p.m." , servings:"2 (30g)"},
	{seq:"5", name:"Evening Meal", time:"5:30-6:30 p.m." , servings:"4 (60g)"},
	{seq:"6", name:"Snack *with protein", time:"9:30-10:30 p.m." , servings:"1-2 (15-30g)"}
];

$scope.columns = [{text:"Time"}, {text:"Meal"},{text:"Servings"}];


});