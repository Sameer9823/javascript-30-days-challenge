function factorial(n){
    if(n===0 || n===1){
        return 1;
    }
    return n * factorial(n - 1)

}
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(50));
console.log(factorial(2));

function fabonacci(a){
    if (a === 0) {
        return 0
    } else if (a === 1) {
        return 1
    }
    return fabonacci(a-1) + fabonacci(a - 2)
}
console.log(fabonacci(0));
console.log(fabonacci(1));
console.log(fabonacci(2));
console.log(fabonacci(7));


function sumArray(arr, index = 0, sum = 0) {
    if (index === arr.length) {
        console.log(sum);
    }
}
sumArray([1, 2, 3, 4, 5]);

function arr1(arr, index = 0, max = -Infinity){
    if(index === arr.length){
        console.log(max);
        return;
    }

    if(arr[index] > max){
        max = arr[index];
    }
    arr1(arr, index + 1, max);

}
arr1([1,2,3,4,5,8])

function resverseString(string){
    if(string.length === 0){
        return string;
    }
    return resverseString(string.slice(1)) + string[0];
}
console.log(resverseString("hello"));

function isPalindrome(str){
    function cleanstring(s){
        return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }

    str = cleanstring(str);

    if(str.length <=1){
        return true;
    }
    if(str[0] === str[str.length - 1]){
        return isPalindrome(str.slice(1, str.length - 1));
        }
        return false;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("A man, a plan, a canal"));


function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1; 
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid; 
    }

    if (target < arr[mid]) {
        return binarySearch(arr, target, low, mid - 1);
    }

    return binarySearch(arr, target, mid + 1, high); 
}


function binarySearchIterative(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; 
        }

        if (target < arr[mid]) {
            high = mid - 1; 
        } else {
            low = mid + 1; 
        }
    }

    return -1; 
}


const sortedArray = [1, 2, 3, 4, 5, 32, 45, 66];

console.log(binarySearch(sortedArray, 32));
console.log(binarySearch(sortedArray, 2)); 
console.log(binarySearch(sortedArray, 3));  
console.log(binarySearch(sortedArray, 7)); 

console.log(binarySearchIterative(sortedArray, 32)); 
console.log(binarySearchIterative(sortedArray, 2));  
console.log(binarySearchIterative(sortedArray, 3));  
console.log(binarySearchIterative(sortedArray, 7)); 

function countOccurenceRecursive(arr, target, index = 0){
    if(index >= arr.length){
        return 0;
    }
    const countInRest = countOccurenceRecursive(arr, target, index + 1);
    return (arr[index] === target ? 1 : 0) + countInRest;
}
const array = [1,2,3,4,3,4,2,23,4,2,3,4]
console.log(countOccurenceRecursive(array, 2));
console.log(countOccurenceRecursive(array, 4));

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node, result = []){
    if(node === null){
        return;
    }
    inOrderTraversal(node.left, result);

    result.push(node.value);

    inOrderTraversal(node.right, result);

    return result;
}
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);


const result = inOrderTraversal(root);
console.log(result);



class TreeNodes {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function calculateDepth(node) {
    if (node === null) {
        return 0; 
    }

    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

const root1 = new TreeNodes(1);
root1.left = new TreeNodes(2);
root1.right = new TreeNodes(3);
root1.left.left = new TreeNodes(4);
root1.left.right = new TreeNodes(5);
root1.right.right = new TreeNodes(6);
root1.left.left.left = new TreeNodes(7);

const depth = calculateDepth(root1);
console.log(depth); 
