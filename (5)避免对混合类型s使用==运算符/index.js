"1.0e0" == {
	valueOf: function () {
		return true;
	}
};//?
var today = new Date();//?
/*if (form.month.value == (today.getMonth() + 1) && form.day.value == today.getDate()) {
	//
}*/
var today = new Date();//?
// 最好是使用严格运算符
var date = new Date("1999/12/31");//?
date == "1999/12/31";//? false
// Date 对象被转换成一种不同格式的字符串
date.toString();//?

function toYMD(date) {
	var y = date.getYear() + 1900,
		m = date.getMonth(),
		d = date.getDate();
	return y + "/" + (m < 10 ? "0" + m : m)
		+ "/" + (d < 10 ? "0" + d : d);
}

toYMD(date);//?
