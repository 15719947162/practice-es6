//按照结构位置对应，对变量赋值
let [a,b,c] = [1,2,3]
console.log(a,b,c);
//只要左右两边的结构一致，就会对对应的位置变量进行赋值
let [a1,[b1],[[c1]]] = [1,[2],[[3]]];
console.log(a1,b1,c1);
let [ , , c2] = ["a", "b", "c"];
console.log(c2);
//不完全解构
let [a3, [b3], c3] = [1, [2, 3], 4];
console.log(a3,b3,c3);
//集合与数组也能进行解构赋值
let [a4, b4, c4] = new Set(['a', 'b', 'c']);
