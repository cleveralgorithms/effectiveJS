// 通过构造函数的方式使用 产生一个新的对象作为其接收者
function User(name,passwordHash) {
	this.name = name;
	this.passwordHash = passwordHash;
}

var u = new User('sfalken','0ef33ae791068ec64b502d6cb0191387');

u.name;//?