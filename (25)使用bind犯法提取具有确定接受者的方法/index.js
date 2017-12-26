var buffer = {
	entries:new Array(),
	add: (s) => {
		return this.entries.push(s);
	},
	concat: () => {
		return this.entries.join("");
	}
};

var source = ["867", "-", "5309"];
source.forEach(buffer.add.bind(buffer));
buffer.join("");