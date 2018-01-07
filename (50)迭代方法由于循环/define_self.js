// 提取满足为此的数组的前几个元素

function takeWhile(a,pred) {
	var result = [];
	for (var i=0,n=a.length;i<n;i++) {
		if (!pred(a[i],i)) {
			break;
		}
		result[i] = a[i];
	}
	return result;
}

var prefix = takeWhile([1, 2, 4, 8, 16, 32], function (n) {
	return n < 10;
});//?

// 挂载上面的方法到数组原型上

Array.prototype.takeWhile = function (pred) {
	var result = [];
	for (var i=0,n=this.length;i<n;i++) {
		if (!pred(this[i],i)) {
			break;
		}
		result[i] = this[i];
	}
	return result;
}

var prefix2 = [1, 2, 4, 8, 16, 32].takeWhile(function (n) {
	return n < 10;
});//?

// 循环的有点在于有控制流操作

// some 方法 是否任意一个元素返回了真值

[1,10,100].some(function (x) {
	return x > 5;
});//?
// 是否所有的元素返回了一个真值
[1, 10, 100].every(function (x) {
	return x < 0;
});//?

// 上面的两种方法都是短路循环 一旦产生了一个返回值 就立即返回 不会执行其余的操作

// 可以使用every实现takeWhile的操作

function takeWhile2(a,pred) {
	var result = [];
	a.every(function (x, i) {
		if (!pred(x)) {
			return false;
		}
		result[i] = x;
		return true;
	});
	return result;
}

var prefix = takeWhile2([1, 2, 4, 8, 16, 32], function (n) {
	return n < 10;
});//?