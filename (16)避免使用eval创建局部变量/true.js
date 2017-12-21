var y = "global";
function test(src) {
	(function () {
		eval(src);//?
	})();
	return y;
}

test("var y = 'local' ");//?
test("var z = 'local' ");//?

