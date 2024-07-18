let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr);
console.log(arr[0]);
console.log(arr[9]);

//push
let fruit = ['apple', 'banana', 'grapes', 'pineapple', 'waterlemon']
console.log(fruit);
let ft = fruit.push('gavau');
console.log(ft);
console.log(fruit);

//pop
let num = [1,2,3,4,5,6,7,8]
console.log(num);
console.log(num.pop());
console.log(num);
//shift
let num1 = [1,2,3,4,5,6,7,8]
console.log(num1);
console.log(num1.shift());
console.log(num1);
//unshift
let num2 = [1,2,3,4,5,6,7,8]
console.log(num2);
console.log(num2.unshift(0));
console.log(num2);

//map
let num3 = [1,2,3,4,5,6,7,8]
console.log(num3.map((x) => x * 2));

//filter
let num4 = [1,2,3,4,5,6,7,8]
console.log(num4.filter((x) => x % 2 == 0));

//reduce
let num5 = [1,2,3,4,5,6,7,8]
console.log(num5.reduce((x,y) => x + y));

//for loop to iterate the array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }

//foreach
arr.forEach((x) => console.log(x));

//create a two dimensional array
let arr2 = [[1,2,3],[4,5,6],[7,8]]
console.log(arr2);

//access the element from  2d array
console.log(arr2[0][1]);
