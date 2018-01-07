// 常见的错误
var n = 10;
for (var i =0;i<=n;i++) {
} // 额外的迭代
for (var i=1;i<n; i++) {
} // 缺少第一个迭代项
for (var i = n;i>=0;i--) {
}// 额外的迭代起始项目
for (var i = n-1;i>0;i--) {
}// 缺少第一个迭代器

// 采用闭包的方式可以避免一些问题
var players = [100, 99, 20, 30, 40, 50];
for (var i=0,n=players.length;i<n;i++) {
	players[i].score++;
}

players.forEach(function (p) {
	p.score++;
});
// 通过现有的数组简历新的数组
var input = ["asdasd  ", "asdsadsad ", "sadsadsad" , "sadsadsad ", "asdasdas"];
var trimmed = input.map(function (s) {
	return s.trim();
});
// filter 方法
listings.filter(function (listing) {
	return listing.price >= min && listing.price <= max;
});


