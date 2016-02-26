app.controller('nonCarbCtrl', function ($scope) { //, $modal, $filter, $http
	
$scope.showMeat = false;
$scope.showProtein = false;
$scope.showFat = false;
$scope.showFree = false;
$scope.showVegetables = false;

$scope.showMeatSwitch = function () {  //turns Meat on / off
	$scope.showMeat = !$scope.showMeat;
};

$scope.showProteinSwitch = function () {  //turns millk on / off
	$scope.showProtein = !$scope.showProtein;
};

$scope.showFatSwitch = function () {  //turns Fat on / off
	$scope.showFat = !$scope.showFat;
};

$scope.showFreeSwitch = function () {  //turns Free on / off
	$scope.showFree = !$scope.showFree;
};

$scope.showVegetablesSwitch = function () {  //turns Vegetables on / off
	$scope.showVegetables = !$scope.showVegetables;
};
	
	
$scope.Meat = [
	{name:"Beef, ground, lean or extra lean" , serving:""},
	{name:"Chicken, turckey" , serving:""},
	{name:"Fish or seafood (1/4 cup = 1 oz", serving:""},
	{name:"Ham" , serving:""},
	{name:"Pork" , serving:""},
	{name:"Lamb" , serving:""},
	{name:"Veal" , serving:""},
	{name:"Lunch meat" , serving:"-use less often"},
	{name:"Hot Dog" , serving:"-use less often"},
	{name:"Sausage" , serving:"-use less often"}
];

$scope.Protein = [
	{name:"Cheese (1 oz of cheese = 1 oz of meat)", serving:""},
	{name:"Cottage cheese (1/4 cup = 1 oz of meat", serving:""},
	{name:"Egg (1 egg = 1 oz of meat", serving:""},
	{name:"Peanut butter (2 Tbsp = 1 oz", serving:""}
	];
	
$scope.Fat = [
	{name:"Tub margarine, mayonnaise, oil (canola, olive)", serving:"1 tsp"},
	{name:"Nuts, seeds", serving:"1 Tbsp"},
	{name:"Salad dressing - Regular", serving:"1 Tbsp"},
	{name:"Salad dressing - Reduced-fat", serving:"2 Tbsp"},
	{name:"Avocado", serving:"2 Tbsp"},
	{name:"Bacon", serving:"1 Slice"},
	{name:"Butter", serving:"t tsp"},
	{name:"Cream cheese", serving:"1 Tbsp"},
	{name:"Gravy, sour cream, plain coffee creamer", serving:"2 Tbsp"},
	{name:"Olives, medium or large", serving:"10"}
	];

$scope.Free = [
	{name:"Club soda", serving:""},
	{name:"Coffee", serving:""},
	{name:"Jello, sugar-free (no added fruit)", serving:""},
	{name:"Seasonings", serving:""},
	{name:"Soft drinks, diet", serving:""},
	{name:"Sugar substitutes", serving:""},
	{name:"Tea, hot or iced, unsweetened", serving:""},
	{name:"Water, plain or unsweetened", serving:""},
	{name:"Salsa", serving:""},
	{name:"Ketchup", serving:""},
	{name:"Mustard", serving:""}
];

$scope.Vegetables = [
	{name:"Asparagus", serving:""},
	{name:"Beans (green, wax, Italian)", serving:""},
	{name:"Beets", serving:""},
	{name:"Broccoli", serving:""},
	{name:"Brussel sprouts", serving:""},
	{name:"Cabbage", serving:""},
	{name:"Carrots", serving:""},
	{name:"Cauliflower", serving:""},
	{name:"Celery", serving:""},
	{name:"Cucumbers", serving:""},
	{name:"Eggplant", serving:""},
	{name:"Lettuce", serving:""},
	{name:"Mushrooms", serving:""},
	{name:"Onions", serving:""},
	{name:"Pea pods", serving:""},
	{name:"Peppers", serving:""},
	{name:"Radishes", serving:""},
	{name:"Spinach", serving:""},
	{name:"Tomatoes", serving:""},
	{name:"Turnips", serving:""},
	{name:"Water chestnuts", serving:""},
	{name:"Zucchini", serving:""}
	
];


});