function square(x) {
	return x**2;
}

square(2);//?

square("3");//?

var guard = {
	guard:function (x) {
		if (!this.test(x)) {
			throw new TypeError("expected" + this);
		}
	}
}

var unit32 = Object.create(guard);//?
unit32.test = function (x) {
	return typeof x === "number" && x === (x >>> 0);
}
unit32.toString = function () {
	return "unit32";
}
var arrayLike = Object.create(guard);//?
arrayLike.test = function (x) {
	return typeof x === "object" && x && unit32.test(x.length);
};

arrayLike.toString = function () {
	return "array-like object";
}

guard.or = function (other) {
	var result = Object.create(guard);
	var self = this;
	result.test = function (x) {
		return self.test(x) || other.test(x);
	};
	var describtion = this + "or" + other;
	result.toString = function () {
		return describtion;
	};
	return result;
}