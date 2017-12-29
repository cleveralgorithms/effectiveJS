// 字符串和属性值得映射表 字典就是可变长的字符串与值得映射集合
/*
* 枚举对象属性名的利器
* */

var dict = {alice: 34, bob: 24, chris: 62};
var people = [];

for (var name in dict) {
	people.push(name + ":" + dict[name]);
}
people;//?

function NaiveDict() {
}

NaiveDict.prototype.count = function () {
	var i = 0;
	for (var name in this) {
		i++;
	}
	return i;
}
NaiveDict.prototype.toString = function () {
	return "[object NaiveObject]"
}

var dict2 = new NaiveDict();
dict2.alice = 34;
dict2.bobo = 24;
dict2.chris = 62;
dict2.count();//?
// 对原型污染
var dict3 = new Array();
dict3.alice = 24;
dict3.bob = 24;
dict3.chris = 62;
dict3.bob;//?
Array.prototype.first = function () {
	return this[0];
}
Array.prototype.last = function () {
	return this[this.length - 1];
}

var names = [];
for (var name in dict) {
	names.push(name);
}

names//?

