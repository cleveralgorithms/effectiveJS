var i, n, sum; // 全局对象
function averageScore(players) {
	sum = 0;
	players.forEach(function (item) {
		sum += score(item);
	});
	return sum / n;
}
var i , n, sum ; // 覆盖了相同的全局变量
function score(player) {
	sum = 0;
	player.forEach(function (item) {
		sum += item.levels.score;
	})
	return sum;
}
// 正确的方法应该是
function averageScore(players) {
	var i, n, sum; // 全局对象
	sum = 0;
	players.forEach(function (item) {
		sum += score(item);
	});
	return sum / n;
}
function score(player) {
	var i , n, sum ; // 覆盖了相同的全局变量
	sum = 0;
	player.forEach(function (item) {
		sum += item.levels.score;
	})
	return sum;
}
// 使用全局对象做平台性检测

if (!this.JSON) {
	this.JSON = {
		parse:function () {
			
		},
		stringify:function () {
			
		}
	}
}
