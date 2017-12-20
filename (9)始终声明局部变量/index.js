// 始终使用var声明新的局部变量
// 考虑使用lint工具帮助检查未绑定的变量

function swap(a,i,j) {
	temp = a[i]; // 全局变量
	a[i] = a[j];
	a[j] = temp;
}

function swap(a,i,j){
	var temp = a[i]; //局部
	a[i] = a[j];
	a[j] = temp;
}

