function User(name,passwordHash) {
	this.name = name;
	this.passwordHash = passwordHash;
	this.toString = function () {
		return `[User ${this.name}]`;
	};
	this.checkPassword = function (password) {
		return hash(password) === this.passwordHash;
	};
}

var u1 = new User('jack', 'XXX');//?
u1.toString();//?
var u2 = new User('james', 'XXXX');//?
var u3 = new User('alloon', 'XXXX');//?

// 现代浏览器引擎 优化了原型链的查找 每个实例都创建自己的原型链的话 反而会占据更多的内存