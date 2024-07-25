// const {obj} = require('./object')

// console.log(obj);

import { add, sub, multiple, divide } from './object.mjs';

const num1 = 10;
const num2 = 5;

console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}`);
console.log(`The difference between ${num1} and ${num2} is ${sub(num1, num2)}`);
console.log(`The product of ${num1} and ${num2} is ${multiple(num1, num2)}`);
console.log(`The quotient of ${num1} divided by ${num2} is ${divide(num1, num2)}`);
