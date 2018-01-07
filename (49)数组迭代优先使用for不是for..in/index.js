var scores = [98, 74, 85, 77, 93, 100, 89];
var total = 0;
for (var score in scores) {
	total += score;
}

var mean = total / score.length;
mean//?
// 即时是数组的索引属性 对象属性key始终是字符串

// 正确的做法就是使用传统的for循环

var scores = [98, 74, 85, 77, 93, 100, 89];
var total = 0;
for (var i = 0, n = scores.length;i<n;i++) {
	total += scores[i];
}

var means = total / scores.length; //?
// 请注意数组的长度问题 请不要使用下面的方式

for (var ii = 0;i<scores.length;i++) {
}

// 上面的做法是错误的 循环的每次迭代都会重新计算数组的长度

