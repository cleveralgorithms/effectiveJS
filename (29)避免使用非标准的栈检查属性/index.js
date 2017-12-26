
/*
* arguments.callee arguments.caller
* 指向被调用函数       指 调用该arguments对象的函数
* */
/*
* 匿名调用自己
* */
function factorial(n) {
	return (n<=1)?1:(n*arguments.callee(n-1))
}

factorial(10); //?

// 但是可以直接使用函数名称的方式调用自身;

function factorial2(n) {
	return (n <= 1) ? 1 : (n * factorial2(n - 1));
}
factorial2(10);//?

 // 非标准的caller
function revealCaller() {
	return revealCaller.caller;
}

function start() {
	return revealCaller();
}

start() === start;//?

// 调用堆栈

function getCallStack() {
	var stack = [];
	for (var f = getCallStack.caller;f;f = f.caller) {
		stack.push(f);
	}
	return stack;
}

getCallStack();//?

function f1() {
	return getCallStack();
}

function f2() {
	return f1();
}

var trace = f2();//?

/*function f(n) {
	return n = 0 ? getCallStack() : f(n - 1);
}*/

// var trace2 = f(1);//? Maximum call stack size exceeded

function strict() {
	"use strict";
	return strict.caller;
} // 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context.

strict();//?