function test(x) {
	eval("var y = x;"); //动态绑定
	return y;
}

test("hello");//?