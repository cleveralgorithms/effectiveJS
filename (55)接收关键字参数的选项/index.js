// 不要造成参数蔓延

/*
* 使用选项对象的方式
* */

function Alert(parents,message,opts) {
	opts = extend({
		width: 320, height: 240
	});
	opts = extend({
		x: (parent.width / 2) - (opts.width / 2),
		y:(parent.height / 2) - (opts.height / 2),
		title:"Alert",
		titleColor:'gray',
		bgColor:"black",
		icon:'info',
		modal:false
	},opts);
	extend(this, opts);
}

function extend(target,source) {
	if (source) {
		for (var key in source) {
			var val = source[key];
			if (typeof val!=="undefined") {
				target[key] = val;
			}
		}
	}
	return target;
}