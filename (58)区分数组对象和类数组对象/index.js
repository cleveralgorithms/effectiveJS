var bits = new BitVector();

bits.enable(4);
bits.enable([1, 3, 8, 17]);//?

var set = new StringSet();
set.add("Hamlet");

//

StringSet.prototype.add = function (x) {
	if (typeof x==="string") {
		this.addString(x);
	}
}
// 跨frame通信的时候 一个frame钟的数组不会继承自另一个frame 的Array.prototype

StringSet.prototype.add = function (x) {
	if (typeof x ==="string") {
		this.addString(x);
	}else if (Array.isArray(x)) {
		x.forEach(function (s) {
			this.addString(s);
		}, this);
	}else{
		for (var key in x) {
			this.addString(key);
		}
	}
}

// 不支持ES5的环境

var toString = Object.prototype.toString;

function isArray(x) {
	return toString.call(x)==="[object Array]"
}

function MyClass() {
	this.keys = new StringSet();
}

MyClass.prototype.update = function () {
	this.keys.add([].slice.call(arguments));
};