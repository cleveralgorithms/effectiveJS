/*
* 迭代器是一个可以顺序存取数据集合的对象
* next方法 是或缺序列中的下一个值
* */

let it = values(1, 4, 1, 4, 2, 1, 3, 5, 6);
it.next();//?
it.next();//?
it.next();//?
it.next();//?
it.next();//?
it.next();//?
it.next();//?
it.next();//?
it.next();//?
it.next();//?
it.next();//?
function values() {
	var i = 0, n = arguments.length;
	return {
		hasNext: () => i < n,
		next: () => {
			if (i >= n) {
				throw new Error("end of iteration");
			}
			return arguments[i++];
		}
	}

}