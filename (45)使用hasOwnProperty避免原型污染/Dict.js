function Dict(elements) {
	this.elements = elements || {};
	this.hasSpecialProto = false;
	this.specialProto = undefined;
}

Dict.prototype.has = function (key) {
	if (key === "__proto__") {
		return this.hasSpecialProto;
	}
	return {}.hasOwnProperty.call(this.elements, key);//?
};
Dict.prototype.get = function (key) {
	if (key === "__proto__") {
		return this.specialProto;
	}
	return this.has(key) ? this.elements[key] : undefined;

};
Dict.prototype.set = function (key, val) {
	if (key === "__proto__") {
		this.hasSpecialProto = true;
		this.specialProto = val;
	} else {
		this.elements[key] = val;
	}
};
Dict.prototype.remove = function (key) {
	if (key==="__proto__") {
		this.hasSpecialProto = false;
		this.specialProto = undefined;
	}else {
		delete this.elements[key];
	}
}