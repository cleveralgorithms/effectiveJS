// 字面量是表示数组的优雅的方法
var a = [1, 2, 3, 4, 5];
// 也可以使用数组构造函数来代替
var a = new Array(1, 2, 3, 4, 5);
//

function f(Array) {
	return new Array(1, 2, 3, 4, 5);
}

f(String);//?
// 确保没人修改全局变量 Array
Array = String;
new Array(1, 2, 3, 4, 5);//?
