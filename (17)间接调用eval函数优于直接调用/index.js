var x = "global";
function test() {
	var x = "local";
	return eval("x");
}

test();//?

