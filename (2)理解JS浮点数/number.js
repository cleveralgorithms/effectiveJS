typeof 17;//? number
typeof 98.6;//? number
typeof -2.1;//? number

/*
* js中所有的数字都是双精度浮点型== doubles
*
* 双精度浮点数能够完美的表达高达53位精度的整数
*
* -2^53 -- 2^ 53
* */

8 | 1 ;//? 9

// 按位或运算 先转换为32位的big endian 取 2的补码表示的整数

(8).toString(2); //? 1000

parseInt("1001", 2); //? 9

0.1 + 0.2;//? 0.30000000000000004
(0.1 + 0.2) + 0.3;//? 0.6000000000000001
0.1 + (0.2 + 0.3);//? 0.6

// 一个有效的解决方法是尽可能的采用整数运算
/*
* 例如货币运算的时候将数值转换为货币最小的单位进行运算
*
* 整数是双精度数的子集 不是单独的数据类型
* */