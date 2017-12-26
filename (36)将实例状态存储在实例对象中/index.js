// 错误的做法
function Tree(x) {
	this.value = x;
}

Tree.prototype = {
	children: [],
	addChild: function (x) {
		this.children.push(x);
	}
};

var left = new Tree(2);//?
left.addChild(1);//?
left.addChild(3);//?

var right = new Tree(6);//?
right.addChild(5);//?
right.addChild(7);//?

var top = new Tree(4);//?
top.addChild(left);//?
top.addChild(right);//?

top.children;//?

// 正确的做法

function Tree2(x) {
	this.value = x;
	this.children = [];
}

Tree2.prototype = {
	addChild: function (x) {
		this.children.push(x);
	}
}

var left = new Tree2(2);//?
left.addChild(1);//?
left.addChild(3);//?

var right = new Tree2(6);//?
right.addChild(5);//?
right.addChild(7);//?

var top = new Tree2(4);//?
top.addChild(left);//?
top.addChild(right);//?

top.children;//?
