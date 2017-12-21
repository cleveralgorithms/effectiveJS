function f() {
	return "global";
}

function test(x) {
	function f() {
		return "local";
	}

	var result = [];
	if (x) {
		result.push(f());
	}
	return result;
}

test(true);//?
test(false);//?