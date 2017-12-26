function CSVReader(separators) {
	this.separators = separators || [","];
	this.regxp = new RegExp(this.separators.map(function (sep) {
		return "\\" + sep[0];
	}).join("|"))
}
// this 变量隐式的绑定到最近的封闭函数
/*CSVReader.prototype.read = function (str) {
	var lines = str.trim().split(/\n/);
	return lines.map(function (line) {
		return line.split(this.regxp);// wrong this
	})
}*/
/*CSVReader.prototype.read = function (str) {
	var lines = str.trim().split(/\n/);
	return lines.map(function (line) {
		return line.split(this.regxp);// wrong this
	},this)
}*/
/*CSVReader.prototype.read = function (str) {
	var lines = str.trim().split(/\n/);
	var self = this;
	return lines.map(function (line) {
		return line.split(self.regxp);// wrong this
	})
}*/
CSVReader.prototype.read = function (str) {
	var lines = str.trim().split(/\n/);
	// var self = this;
	return lines.map(function (line) {
		return line.split(this.regxp);// wrong this
	}.bind(this));
}
// 使用回调函数的bind()方法

var reader = new CSVReader();

reader.read("a,b,c\nd,e,f\n");//?