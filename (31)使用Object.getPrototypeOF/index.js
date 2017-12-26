// 拥有null 原型的对象没有特殊的__proto__属性

var empty = Object.create(null);//?
"__proto__" in empty;//? false 不在这里

// proto 会污染所有的对象

// 相应的实现
if (typeof Object.getPrototypeOf==="undefined") {
	Object.getPrototypeOf = function (obj) {
		var t = typeof obj;
		if (!obj||(t!=="object"&&t!=="function")) {
			throw  new Error("not an object");
		}
		return obj.__proto__;
	}
}
var error = new Error();//?
"__proto__" in error;//? true
