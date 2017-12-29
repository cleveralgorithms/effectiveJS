function C() {

}

C.prototype = null;//?

var o = new C();//?

Object.getPrototypeOf(o) === null;//?

Object.getPrototypeOf(o) === Object.prototype;//?

// 创建一个真正的空对象
var x = Object.create(null);
Object.getPrototypeOf(x) === null;//?

var xx = {__proto__: null};
xx instanceof Object;//? false
