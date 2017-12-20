/*
* 1. 函数可以引用定义在外部作用域的变量
* 2. 闭包比创建他们的函数有更长的生命周期
* 3. 闭包在内部存储其外部变量的引用 并能读写这些变量
* */

function makeSandwich() {
	var magiccIngredient = "peanut butter";

	function make(filling) {
		return magiccIngredient + " and" + filling;
	}

	return make(" jelly");
}

makeSandwich();//?
// 当前函数仍然可以引用在外部函数所定义的变量
function sandwichMaker() {
	var magicIngredient = "peanut butter";

	function make(filling) {
		return magicIngredient + "and" + filling;
	}

	return make;
}

// make 仍能记住 magiccIngredient的值
var f = sandwichMaker();
f("jerry");//?
f("bananas");//?
f("marshmallows");//?

/*
* 函数可以引用在其作用域内的任何变量 包括参数和外部函数变量
* */
function commonSandwichMaker(magicIngredient) {
	function make(filling) {
		return magicIngredient + " and" + filling;
	}

	return make;
}

var hamAnd = commonSandwichMaker("ham");
hamAnd(" ccheese");//?
hamAnd(" mustard");//?

var turkeyAnd = commonSandwichMaker("turkey");//?
turkeyAnd(" Swiss");//?
turkeyAnd(" Provolone");//?
// 创建的两个对象是健哥哥不同的函数 尽管他们都是由相同的make函数定义的
//

/*
* 使用好用的字面量语法 函数表达式
* */
function sandwich(magicIngredient) {
	return function (filling) {
		return magicIngredient + " and" + filling;
	};
}

/*
* 闭包可以更新外部变量的值
* */
function box() {
	var val = undefined;
	return {
		set: function (newVal) {
			val = newVal;
		},
		get: function () {
			return val;
		},
		type: function () {
			return typeof val;
		}
	}
}

var b = box();
b.type();//?
b.set(98.6);//?
b.get();//?
b.type();//?

/*
* 包含了三个闭包的对象 set、get、type、 共享 val
* */