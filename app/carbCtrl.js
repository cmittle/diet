app.controller('carbCtrl', function ($scope) { //, $modal, $filter, $http
	
$scope.showGrains = false;
$scope.showMilk = false;
$scope.showFruits = false;
$scope.showCombo = false;
$scope.showSweets = false;

$scope.grainsExpand = "+";
$scope.milkExpand = "+";
$scope.fruitsExpand = "+";
$scope.comboExpand = "+";
$scope.sweetsExpand = "+";

$scope.showGrainsSwitch = function () {  //turns grains on / off
	$scope.showGrains = !$scope.showGrains;
	switch ($scope.grainsExpand) {
		case "+":
			$scope.grainsExpand = "-";
			break;	
		case "-":
			$scope.grainsExpand = "+";
			break;
	}
};

$scope.showMilkSwitch = function () {  //turns millk on / off
	$scope.showMilk = !$scope.showMilk;
	switch ($scope.milkExpand) {
		case "+":
			$scope.milkExpand = "-";
			break;	
		case "-":
			$scope.milkExpand = "+";
			break;
	}
};

$scope.showFruitsSwitch = function () {  //turns fruits on / off
	$scope.showFruits = !$scope.showFruits;
	switch ($scope.fruitsExpand) {
		case "+":
			$scope.fruitsExpand = "-";
			break;	
		case "-":
			$scope.fruitsExpand = "+";
			break;
	}
};

$scope.showComboSwitch = function () {  //turns Combo on / off
	$scope.showCombo = !$scope.showCombo;
	switch ($scope.comboExpand) {
		case "+":
			$scope.comboExpand = "-";
			break;	
		case "-":
			$scope.comboExpand = "+";
			break;
	}
};

$scope.showSweetsSwitch = function () {  //turns sweets on / off
	$scope.showSweets = !$scope.showSweets;
	switch ($scope.sweetsExpand) {
		case "+":
			$scope.sweetsExpand = "-";
			break;	
		case "-":
			$scope.sweetsExpand = "+";
			break;
	}
};
	
	
$scope.grains = [
	{name:"Bagel" , serving:"1 oz"},
	{name:"Bread" , serving:"1 slice"},
	{name:"English muffin", serving:"1/2 muffin"},
	{name:"Cereal cooked" , serving:"1/2 cup"},
	{name:"Cereal ready to eat, unsweetened" , serving:"3/4 cup"},
	{name:"Starch veg, Corn, peas, mashed white or sweet, yam" , serving:"1/2 cup"},
	{name:"Starch veg, Potato, baked or boiled" , serving:"1 small (3oz)"},
	{name:"Starch veg, Squash (acorn or butternut), cooked" , serving:"1 cup"},
	{name:"Hamburger or hot dog bun" , serving:"1/2 bun"},
	{name:"Beans (pinto, lima, kidney, garbanzo)" , serving:"1/2 cup"},
	{name:"Baked beans" , serving:"1/3 cup"},
	{name:"Pasta or rice, cooked" , serving:"1/3 cup"},
	{name:"Pancakes/waffles" , serving:"1 4-inch"},
	{name:"Tortilla" , serving:"1 6-inch"}
];

$scope.milk = [
	{name:"Milk, skim, 1%, 2%, whole or soy", serving:"1 cup (8 oz)"},
	{name:"Chocolate milk", serving:"1/2 cup"},
	{name:"Yogurt - lite or artificial sweetener", serving:"6-8 oz"},
	{name:"Yogurt - with sugar", serving:"4-6 oz"},
	{name:"Ice cream, regular or lite", serving:"1/2 cup"},
	{name:"Pudding, sugar-free", serving:"1/2 cup"}
	];
	
$scope.fruits = [
	{name:"Apple, orange or pear", serving:"1 small"},
	{name:"Cherries or grapes", serving:"12-15"},
	{name:"Fruit juice (100% real juice)", serving:"1/3 - 1/2 cup"},
	{name:"Melon or berries", serving:"1 cup"},
	{name:"Canned fruit, light", serving:"1/2 cup"},
	{name:"Grapefruit", serving:"1/2 medium"},
	{name:"Banana", serving:"4 inch"},
	{name:"Raisins or prunes", serving:"2 Tbsp"},
	{name:"Dried fruit", serving:"1/4 cup"},
	{name:"V8 100% vegetable juice", serving:"1 1/2 cups (12oz)"}
	];


$scope.combo = [
	{name:"Chili, casserole or hot dish", serving:"1/2 cup"},
	{name:"Potato, pasta or fruit salad", serving:"1/2 cup"},
	{name:"Pizza, thin-crust, medium", serving:"1 slice (1/8 pizza)"},
	{name:"Soup (bean, noodle or vegetable)", serving:"1 cup"},
	{name:"Sub sandwich", serving:"2 inches"},
	{name:"Lasagna", serving:'2" x 3"'}
];



$scope.sweets = [
	{name:'Cookie, 3" across', serving:"1 cookie"},
	{name:"Cake, bar or brownie, unfrosted", serving:'2" square'},
	{name:"Saltines", serving:"6 crackers"},
	{name:"Popcorn, poped, unflavored", serving:"3 cups"},
	{name:"Chips, French fries", serving:"10-12"},
	{name:"Regular syrup, jam, sugar, honey", serving:"1 Tbsp"},
	{name:"Ketcup", serving:"1/4 cup"}
];



});