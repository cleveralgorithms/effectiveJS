function wrapElements(a) {
	var result = [], i, n;
	for (var i = 0, n = a.length; i < n; i++) {
		result[i] = function () {
			return a[i];
		}
	}
	return result;
}

var wrapped = wrapElements([10, 20, 30, 40, 50]);//?
var f = wrapped[0];
f();//?

// 闭包存储的是引用 不是 值

// 解决办法是通过创建一个嵌套函数并且立即调用它来创建一个局部作用域

function wrapElements2(a) {
	var result = [];
	for (var i = 0, n = a.length; i < n; i++) {
		(function () {
			var j = i;
			result[i] = function () {
				return a[j];
			};
		})();
	}
	return result;
}

var wrapped2 = wrapElements2([10, 20, 30, 40, 50]);//?
var f2 = wrapped2[0];
f2();//?

// 另外一种办法

function wrapElements3(a) {
	var result = [];
	for (var i = 0, n = a.length; i < n; i++) {
		(function (j) {
			result[i] = function () {
				return a[j];
			}
		})(i);
	}
	return result;
}

var wrapped3 = wrapElements3([10, 20, 30, 40, 50]);//?

var f3 = wrapped3[0];

f3();//?