function Dir(path,entries) {
	this.path = path;
	for (var i=0,n=entries.length;i<n;i++) {
		this[i] = entries[i];
	}
}

Dir.prototype = Object.create(Array.prototype);

var dir = new Dir("/tmp/mysite",["index.html","script.js","style.css"])
dir.length;//?

Object.prototype.toString.call(dir);//?
Object.prototype.toString.call([]);//?
