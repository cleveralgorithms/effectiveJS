var y = "global";
function test(src) {
	eval(src);
	return y;
}

test("var y = 'global' ");//?
test("var y = 'local ' ");//?

