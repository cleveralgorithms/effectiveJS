function User(name, passwordHash) {
	this.name = name;
	this.passwordHash = passwordHash;
}

/*
* 如果王杰使用new关键字
* */
var u = User("bala", "xxxxxx");
u;//?
this.name;//?
this.passwordHash;//?

// 都编程全局的了 严格模式下 都变成undefined了

// 正确的做法
function User2(name, passwordHash) {
	if (!this instanceof User) {
		return new User2(name, passwordHash);
	}
	this.name = name;
	this.passwordHash = passwordHash;
}

// 上述方法是返回继承User的对象

// 第二种方式

function User3(name, passwordHash) {
	if (typeof Object.create === "undefined") {
		Object.create = function (prototype) {
			function C() {}
			C.prototype = prototype;
			return new C();
		}
	}
	var self = this instanceof User3
		? this
		: Object.create(User3.prototype)
	self.name = name;
	self.passwordHash = passwordHash;
	return self;
}

// 改进


