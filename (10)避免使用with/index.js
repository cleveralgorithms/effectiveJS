/*
* 避免使用with语句
* 使用剪短的变量名代替重复访问的对象
* 显式绑定局部变量到对象属性上 不要使用with语句隐式的绑定他们
* */
// 错误的做法
function status(info) {
	var widget = new Widget();
	with(widget){
		setBackground("blue");
		setForeground("white");
		setText("Status" + info);
		show(); //
	}
}
// 正确的做法
function status(info) {
	var w = new Widget();
	w.setBackground("blue");
	w.setForeground("white");
	w.addText("Status" + info);
	w.show();
}
// 词法环境 == 作用域链

// 最佳实践
/*
* 将局部变量显式地绑定到相关的属性上
* */
function f(x,y) {
	var min = Math.min, round = Math.round, sqrt = Math.sqrt;
	return min(round(x), sqrt(y));
}

Math.x = 0;
Math.y = 0;
f(2, 9);//? 2