// arguments 没有继承Array.prototype
/*function highlight() {
	[].forEach.call(arguments,function (widget) {
		widget.setBackground("yellow");
	})
}*/
// 数组对象的基本契约总共有两个简单的规则
// 具有一个范围在0-2^32 的整型length属性
var arrayLike = {0: "a", 1: "b", 2: "c", length: 3};
var result = Array.prototype.map.call(arrayLike, function (s) {
	return s.toUpperCase();
});//?

// 字符串变现为不可变的数组 他们是可索引的 长度可以通过length属性获取

var result = Array.prototype.map.call("abc", function (s) {
	return s.toUpperCase();
});//?

// 增删索引属性的时候 会强制更新 length属性

// 不能简单的连接一个以arguments对象作为内容的数组
function namesColumn() {
	return ["Names"].concat(arguments);
}

namesColumn("Alice", "Bob", "Chris");//?

// 转换该数组  使用slice方法
function namesColumn2() {
	return ["Names"].concat([].slice.call(arguments));
}
namesColumn2("Alice", "Bob", "Chris");//?


