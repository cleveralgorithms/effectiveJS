var y = "gobal";
function test(x) {
	if (x) {
		eval("var y = 'local';" ); // 动态绑定
	}
	return y;
}

test(true);//?
test(false);//?
