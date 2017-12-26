// C.prototype  简历由new C()创建的对象的原型
// Object.getPrototypeOf() 获取obj对象原型的方法
// obj.__proto__ 获取对象原型的非标准方法

function User(name,passwordHash) {
	this.name = name;
	this.passwordHash = passwordHash;
}
User.prototype.toString = function () {
	return `[User ${this.name}]`
}
User.prototype.checkPassword = function (password) {
	return hash(password) === this.passwordHash;
}

var u = new User("genius","xxxxxxxxxxxxxxxx");//?

Object.getPrototypeOf(u) === User.prototype;//? true

// JS中类的本质 一个构造函数与一个用于该类实例间共享方法的内部实现

