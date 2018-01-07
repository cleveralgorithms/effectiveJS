var x;//?
x;//?
// 对象中不存在的属性也会产生undefined
var obj = {};
obj.x;//?

// 函数结尾使用未带参数的return语句 或者未使用return语句都会产生返回值为undefined

function f() {
	return;
}

f();//?

function g() {

}

g();//?

// 未给函数参数提供实参则该函数参数值为undefined

function f2(x) {
	return x;
}

f2();//?

// undefined 的结果不是一个特定的值

// 不要用于其他目的
var s1 = new Server(80, "example.com");//?
var s2 = new Server(80);//?

// arguments.length

function Server(ports,hostname) {
	if (arguments.length<2) {
		hostname = "localhost"
	}
	hostname = String(hostname);
}

// 如果使用显式的方式来设置的话 可能会产生undefined
 function Server2(port,hostname) {
	 if (hostname===undefined) {
		 hostname = "localhost";
	 }
	 hostname = String(hostname);//?
 }

 // 另一种方式是测试hostname是否为真

function Server3(port,hostname) {
	hostname = String(hostname || "localhost");
}

var c1 = new Element(0, 0);//?

var c2 = new Element();//?

function Element(width,height) {
	this.width = width || 320;
	this.height = height || 240;
}

// 但是出现问题

var c3 = new Element(0, 0);//?

c3.width;//?
c3.height;//?

function Element3(width,height) {
	this.width = width === undefined ? 320 : width;
	this.height = height === undefined ? 240 : height;
}

var c4 = new Element3(0, 0);//?


