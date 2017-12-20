function Point(x,y) {
	this.x = x||0
	this.y = y||0
}

Point.prototype.isOrigin = function () {
	return this.x===0&&this.y===0
}
// 自动分号插入

// 分号插入规则

// 1. 分号仅在 } 标记之前 一个或多个换行之后和程序输入的结尾被插入
// 一行一个代码块 一段程序的结束地方 省略分号

function square(x) {
	var n = +x
	return n*n
}
function area(r) {
	r=+r;return Math.PI*r*r
}
// function add1(r) {
// 	r=+r return Math.PI*r*r //error SyntaxError: Unexpected
// }
//2 分号插入是一种错误矫正机制

/*a=b
(f());
a=b
f();*/

/*a
++
b
等价于
a;
++b;
*/
