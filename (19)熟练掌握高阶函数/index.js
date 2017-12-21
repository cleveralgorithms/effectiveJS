function compareNumbers(x,y) {
	if (x<y) {
		return -1; //  -1 情况 x 不动
	}
	if (x>y) {
		return 1; // 1 情况 x 往后
	}
	return 0;
}

[3, 1, 4, 1, 5, 9].sort(compareNumbers);//?

var names = ["Fred", "Wilma", "Pebbles"];
var upper = [];
for (var i=0,n=names.length;i<n;i++) {
	upper[i] = names[i].toUpperCase();
}
upper;//?

var array = ['a', 'b', 'c'];
var result = array.map(function (value) { return value.toUpperCase() })
console.log(result);//?

var aIndex = "a".charCodeAt(0);//?
var alphabet = "";
for (var i=0;i<26;i++) {
	alphabet += String.fromCharCode(aIndex + i);//?
}
alphabet;//?

var digits = "";
for (var i=0;i<10;i++) {
	digits += i;
}

digits;//?

var random = "";
for (var i = 0;i<8;i++) {
	random += String.fromCharCode(Math.floor(Math.random() * 26)+aIndex);
}
random;//?

function buildString(n,callback) {
	var resul = "";
	for (var i = 0;i<n;i++) {
		result += callback(i);
	}
	return result;
}

var a = buildString(26, function (i) {
	return String.fromCharCode(aIndex + i);
});

a;

var b = buildString(10,function (s) {
	return s
})
b;//?

