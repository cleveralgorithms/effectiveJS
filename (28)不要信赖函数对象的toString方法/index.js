// 将源代码重现为字符串的能力
/*
* function (x) {
    $_$wf(1);
    return $_$w(1, 1), x + 1;
}
* */
(function (x) {
	return x + 1;
}).toString();//?
// 失败的案例
(function (x) {
	return x + 1;
}).bind(16).toString();//? function () { [native code] }

// 多数环境的bind方法都是使用c++实现的
/*
* function (y) {
        $_$wf(1);
        return $_$w(1, 6), x + y;
    }
* */
(function (x) {
	return function (y) {
		return x + y;
	}
})(42).toString();//?