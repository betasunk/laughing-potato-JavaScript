var arr = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
];
var newArr = Object.assign([], arr);
//截断数组
newArr.length = 1;
console.log(newArr); //[{a:1,b:2}]
console.log(arr); //[{a:1,b:2},{a:3,b:4}]
//操作newArr，这里看着对arr没影响，实际上已经挖了一个坑，下面就跳进去
newArr[0].a = 123;
//修改newArr[0]这个对象，也是影响了arr[0]这个对象
console.log(arr[0]); //{a: 123, b: 2}

// Object.assign会课拷贝第一层的值，对于第一层的值都是深拷贝，而到第二层的时候就是 复制引用。
// 类似的情况还有，slice方法和concat方法等。