// 不要再Object.prototype 增加可枚举的属性

Object.prototype.allKeys = function () {
	var result = [];
	for (var key in this) {
		result.push(key);
	}
	return result;
}

({a: 1, b: 2, c: 3}).allKeys();//?


function allKeys(obj) {
	var result = [];
	for (var key in this) {
		result.push(key);
	}
	return result;
}
// 正确的做法
Object.defineProperty(Object.prototype, "allKeys", {
	value: function () {
		var result = [];
		for (var key in this) {
			result.push(key);
		}
		return result;
	},
	writable: true,
	enumerable: false,
	configurable: true
});
