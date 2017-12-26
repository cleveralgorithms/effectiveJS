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

/*
* 以变量的方式引用 不通过this 直接引用
* */