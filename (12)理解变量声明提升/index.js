/*
* JS 支持 原型链 即 词法作用域
* JS不支持 块级作用域
* */

function isWinner(player, others) {
	var highest = 0;
	for (var i = 0, n = others.length; i < n; i++) {
		var player = others[i];
		if (player.score > highest) {
			highest = player.score;
		}
	}
	return player.sore > highest;
}

// try ... catch 作用域是 catch语 句块

function test() {
	var x = "var", result = [];
	result.push(x);
	try {
		throw "exception";
	} catch (x) {
		x = "catch";
	}
	result.push(x);
	return result;
}

test();//?
/*
* 代码块中的变量声明会被隐式地提升到封闭函数的顶部
* 重声明变量被视为单个变量
* 考虑手动提升局部变量的声明 从而避免混淆
* */

