var s = new String("hello");//? String { [Iterator]  '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }
// 5个原始类型 boolean number string null undefined
// 对null 和typeof的操作结果为 object ECMA标准描述为特定的类型

s[4];//?
s + " world";//?
/*
* String 对象是真正的对象
* */

typeof s;//?
typeof "hello";//?
/*
* 不能使用内置的操作符比较
* */

var s1 = new String("hello");
var s2 = new String("hello");
s1 === s2;//? false
/*
* 每个String对象都是一个单独的对象 其总是等于自身 非严格模式下结果相同
* */

s1 == s2;//?
"hello".toUpperCase();//?
"hello".someProperty = 17;//?
"hello".someProperty;//? undefined
// 每次隐式封装都会产生一个新的String对象

// 给一个对象设置属性 但是没注意他是一个原始值 程序会忽略 并且继续执行




