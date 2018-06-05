var numbers = [1,2,3,4,5,6,7,8,9];
// push()、pop()、shift()、unshift()

// splice()
var spliceNumbers = [1,2,3,4,5,6];
spliceNumbers.splice(3,2);  //从索引3开始删除2个元素
spliceNumbers.splice(3,0,2);  //从索引3开始添加1个元素 2
spliceNumbers.splice(3,2,2,3);  //从索引3开始删除2个元素同时添加2个元素2，3

// concat()
var zero = 0;
var positiveNumbers = [1,2,3];
var negativeNumbers = [-3,-2,-1];
var concatNumbers = negativeNumbers.concat(zero, positiveNumbers);

// every()
var isEven = function(x) {
  //console.log(x);
  return (x % 2 == 0) ? true : false;
}
numbers.every(isEven);  //迭代数组中的每个元素，直到返回false
numbers.some(isEven); //迭代数组中的每个元素，直到返回true

// foreach()
numbers.forEach(
  function(x) {
    //console.log(x);
  }
);

// map()
var mymap = numbers.map(isEven);
//console.log(mymap)

// filter()
var evenNumbers = numbers.filter(isEven);

// reduce()
numbers.reduce(function(previous, current, index) {
  return previous + current;
});

// from() 根据已有的数组创建一个新数组
let numbers2 = Array.from(numbers);
let evens = Array.from(numbers, x=> x+x);

// of() 根据传入的参数创建一个新数组
let number3 = Array.of(1,2,3,4,5,6);
let number4 = [1,2,3,4,5];
let numberCopy = Array.of(...number4);

// fill() 用静态值填充数组
numberCopy.fill(1);

// copyWithin() //赋值数组中的一系列元素到同一数组指定的起始位置

// reverse()  sort()
