/*
* 作为共享函数被对象使用
* */

function hello() {
	"use strict";
	return "hello " + this.username;
}

var obj1 = {
	hello:hello,
	username:"Gordon Gekko"
}
obj1.hello();//?
var obj2 = {
	hello:hello,
	username:"Biff Tannen"
}
obj2.hello();//?

