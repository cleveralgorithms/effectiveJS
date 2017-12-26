function repeat(n,action) {
	for (var i=0;i<n;i++) {
		eval(action);
	}
}

// 上面的函数在全局作用域会工作的很好，然而

function benchmark() {
	var start = [], end = [], timings = [];
	repeat(1000, "start.push(Date.now());f();end.push(Date.now())");
	for (var i = 0,n = start.length;i<n;i++) {
		timings[i] = end[i] - start[i];
	}
	return timings;
}

// 简装的代码应该接收函数而不是字符串
function repeat2(n,action) {
	for (var i = 0;i<n;i++) {
		action();
	}
}
function benchmark2() {
	var start = [], end = [], timings = [];
	repeat2(1000, function () {
		start.push(Date.now());
		f();
		end.push(Date.now());
	});
	for (var i = 0,n=start.length;i<n;i++) {
		timings[i] = end[i] - start[i];
	}
	return timings;
}

function f() {
}

benchmark2();//?