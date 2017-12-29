// JS 对象操作是以继承的方式工作的 空对象  也继承了 Object.prototype

var dict = {};//?

"toString" in dict;//?
"valueOf" in dict;//?
dict.hasOwnProperty("toString");//?
dict.hasOwnProperty("valueOf");//?

dict.hasOwnProperty("alice") ? dict.alice : undefined;//?

// dict.hasOwnProperty(x) ? dict[x] : undefined;//?
dict.hasOwnProperty = 10;//?
// dict.hasOwnProperty("alice")
// dict.hasOwnProperty is not a function

var hasOwn = Object.prototype.hasOwnProperty;
hasOwn.call(dict, "alice");//?

function Dict(elements) {
	this.elements = elements || {};//
}
Dict.prototype.has = function (key) {
	return {}.hasOwnProperty.call(this.elements, key);//?
}
Dict.prototype.get = function (key) {
	return this.has(key)
		? this.elements[key]
		: undefined;
}
Dict.prototype.set = function (key,val) {
	this.elements[key] = val;
}
Dict.prototype.remove = function (key) {
	delete this.elements[key];
}

var dict2 = new Dict({
	alice: 34,
	bob: 24,
	chris: 62
});

dict2.has("alice");//?
dict2.get("bob");//?
dict2.has("valueOf");//?

var empty = Object.create(null);//?
"__proto__" in empty;//?
var hasOwn = {}.hasOwnProperty;
hasOwn(empty, "__proto__");