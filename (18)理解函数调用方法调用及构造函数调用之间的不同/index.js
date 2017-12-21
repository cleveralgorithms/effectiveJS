// 简单函数的调用
function hello(username) {
	return "hello, " + username;
}

hello("James");//?

// 简单方法调用
var obj = {
	hello:function () {
		return "hello " + this.username; // this 指向的是 obj obj is an object
	},
	username:"Hans Gruber"
}
obj.hello();//?

var obj2 = {
	hello:obj.hello,
	username:'Boo Radley'
}
obj2.hello();//?

/*
* 绑定到this变量的对象被称为调用接受者 receiver 表达式obj.hello()
*
* */