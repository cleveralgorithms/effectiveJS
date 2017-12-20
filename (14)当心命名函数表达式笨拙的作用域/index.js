function double(x) {
	return x * 2;
}

double(2);//?

// 绑定函数到变量f 不是变量double

var f = function double(x) {
	return x * 2;
}
var f2 = function (x) {
	return x * 2;
}

var f3 = function find(tree, key) {
	if (!tree) {
		return null;
	}
	if (tree.key === key) {
		return tree.value;
	}
	return find(tree.left, key) || find(tree.right, key);
}

var constructor = function () {
	return null;
}
var f4 = function f() {
	return constructor();
}
f4();//?

var f5 = function g() {
	return 17;
}
var g = null;
g();//?

