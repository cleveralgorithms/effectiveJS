function f() {
	return "global";
}
function test(x) {
	var g = f;
	var result = [];
	if (x) {
		g = function () {
			return "local";
		}
		result.push(g());
	}
	result.push(g());
	return result;
}

f(false);//?

f(true);//?