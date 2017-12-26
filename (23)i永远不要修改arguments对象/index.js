/*function callMethod(obj,method) {
	var shift = [].shift;
	shift.call(arguments);
	shift.call(arguments);
	return obj[method].apply(obj, arguments);
}*/

var obj = {
	add: (x, y) => x + y
};
// callMethod(obj, "add", 17, 25);
function strict(x) {
	"use strict";
	arguments[0] = "modified";
	return x === arguments[0];
}
function nostrict(x) {
	arguments[0] = "modified";
	return x === arguments[0];
}

strict("unmodified");//?
nostrict("unmodified");//?

function callMethod(obj,method) {
	var args = [].slice.call(arguments, 2);
	return obj[method].apply(obj,args);//?
}

callMethod(obj, "add", 17, 25);//?
