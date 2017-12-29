Array.prototype.split = function (i) {
	return [this.slice(0, i), this.slice(i)];
};//?

Array.prototype.split = function () {
	var i = Math.floor(this.length / 2);
	return [this.slice(0, i), this.slice(i)];
}//?

if (typeof Array.prototype.map!=="function") {
	Array.prototype.map=function (f,thisArg) {
		for (var i=0,n=this.length;i<n;i++) {
			result[i] = f.call(thisArg, this[i], i);
		}
		return result;//?
	}
}



