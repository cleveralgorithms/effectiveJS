function report(highScores) {
	var result = "";
	var i = 1;
	for (var name in highScores) {
		result += i + "." + name + ":" + highScores[name].points + "\n";
		i++;
	}
	return result;
}

report([
	{name: 'hank', points: 1110100},
	{name: 'Steve', points: 1064500},
	{name: 'hank', points: 1050200},
]);//?