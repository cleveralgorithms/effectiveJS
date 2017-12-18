2 + 3;//? 5

"hello " + "world";//? hello world

/* 偏爱字符串*/
"2" + 3;//? 23
2 + "3";//? 23
/*操作顺序敏感*/
1 + 2 + "3";//? 33
1 + "2" + 3;//? 123

/*强制转换会隐藏错误
*
* null ==0
* 未定义的变量转换为浮点数的值为NaN NaN 不等于本身
* */

var x = NaN;//? NaN

x === NaN;//? false

isNaN(NaN);//? true 前提是知道参数是数字


// 判断都是错误的

isNaN(undefined);//?
isNaN("foo");//?
isNaN({});//?
isNaN({valueOf: 'foo'});//?

// 解决办法

/*
* 依据 根据NaN是唯一一个不等一其自身值的特性
* */

var a = NaN;
a !== a;//? true a和其自身不相等的结果为 true
var b = "foo";
b !== b;//? false
var c = undefined;//?
c !== c;//? false
var d = {};
d !== d;//? false
var e = {
    valueOf: "foo"
};//?
e !== e;//?

function isReallyNaN(x) {
    return x !== x;
}

// 强制转换对象为字符串

"the Math Object" + Math;//?
"the JSON Object" + JSON;//?

Math.toString();//?
JSON.toString();//?

// 对象通过valueOf转换为数字

"J" + {
    toString: function () {
        return "S";
    }
};//?
2 * {
    valueOf: function () {
        return 3;
    }
};//?

// 强制隐式转换 会调用valueOf()方法

var obj = {
    toString: function () {
        return "[object MyObject]";
    },
    valueOf: function () {
        return 17;
    }
};

"object:" + obj;//? object:17

// JS 有 7种 假值
/*
* false
* 0
* -0
* ""
* NaN
* null
* undefined
*
* */

function point(x, y) {
    if (!x) {
        x = 320;
    }
    if (!y) {
        y = 240;
    }
    return {x: x, y: y};
}

point(0, 0);//?

// 使用更加严格的模式 检验undefined

function pointed(x,y) {
    if (typeof x === "undefined") {
        x = 320;
    }
    if (typeof y === "undefined") {
        y = 240;
    }
    return {x: x, y: y};
}

pointed();//?
pointed(0,0);//?