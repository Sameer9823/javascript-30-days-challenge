// even odd 
function number(num){
    if(num%2==0){
        console.log(num,"is even number");
        }
        else{
            console.log(num,"is odd number");
        }
}
number(5);
number(4);
number(2);

//square of number
function square(num){
    return num*num;
    }
    console.log(square(5));
    console.log(square(4));
    console.log(square(2));

//find maximum of two number
function max(a,b){
    if(a>b){
        return a;
        }
        else{
            return b;
        }
    }
    console.log(max(5,4));  
    console.log(max(4,2));

//concatenate two string
function concat(str1,str2){
    return str1+str2;
    }
    console.log(concat("hello","world"));

//arrow function
let sum = () => {
    return 5+5;
}
console.log(sum());

//check a string have specific character and return boolean
let check = (str,letter) => {
    return str.includes(letter);
    }
console.log(check("hello","l"));

function add(num1, num2=4){
    return num1+num2;
}
console.log(add(5));

function greet(Person, age=23){
    return "Hello "+Person+" you are "+age+" years old";
}
console.log(greet("sameer"));

//write high order function that takes a function and number and cll function multiple times
function repeat(fn, num){
    for(let i=0;i<num;i++){
        fn();
        }

}
function sayHello(){
    console.log("Hello world");
}
repeat(sayHello,5);

//write a hof that takes a two function and a values applies the first function of the value, applies the first function to the value and then applies secondfunctionn to result
function applyFunctions(fn1, fn2, value) {
    const result1 = fn1(value);
    const result2 = fn2(result1);
    return result2;
}


function double(x) {
    return x * 2;
}

function addFive(x) {
    return x + 5;
}

const value = 10;
const result = applyFunctions(double, addFive, value); 
console.log(result); 




