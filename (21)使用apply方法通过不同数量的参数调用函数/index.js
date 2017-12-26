// 可变参数 可变元函数

// apply 方法 指定第一个参数绑定到被调用函数的this变量
 var buffer = {
	state:[],
	 append:function () {
		 for (var i = 0,n = arguments.length;i<n;i++) {
			 this.state.push(arguments[i]);
		 }
	 }
 }

buffer.append("Hello");//?
buffer.append(firstName," ",lastName,"!");