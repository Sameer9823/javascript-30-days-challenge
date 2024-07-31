function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                }

                }

                return arr;

                }
console.log("bubbleSort: " + bubbleSort([4,5,1,3,2,7,6]));

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++)
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                }
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
                }
                return arr;
            }
console.log("selectionSort :" + selectionSort([6,4,7,1,5,9,2]));

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
        }
        let pivot = arr[Math.floor(arr.length / 2)];
        let left = [];
        let middle = [];
        let right = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
                }
                else if (arr[i] == pivot) {
                    middle.push(arr[i]);
                    }
                    else {
                        right.push(arr[i]);
                        }
                        }
                        return quickSort(left).concat(middle, quickSort(right));
                        }
console.log("quickSort: " + quickSort([3,6,8,10,1,4,7]));

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
            }
            }
            return -1;
            }
console.log("linearSearch: " + linearSearch([1,2,3,4,5,6,7], 7));

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            return mid;
            }
            else if (arr[mid] < target) {
                left = mid + 1;
                }
                else { 
                    right = mid - 1;
                    }
                    return -1;
                    }
                }
console.log("binarySearch: " + binarySearch([3,2,1,4,5,6,7,8,9], 5));


function countChar(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]]) {
            charCount[str[i]]++;
            }
            else {
                charCount[str[i]] = 1;
                }
                }
                for (let key in charCount) {
                    console.log(key + ": " + charCount[key]);
                    }
                    }
                    console.log("countChar: " + countChar("sameer"));
                
function longestSubstring(str) {
    let charIndex = {};
    let start = 0;
    let maxLength = 0;
    let maxSubstring = "";
    for (let i = 0; i < str.length; i++) {
        if (charIndex[str[i]]) {
            start = Math.max(start, charIndex[str[i]] + 1);
            }
            charIndex[str[i]] = i;
            let length = i - start + 1;
            if (length > maxLength) {
                maxLength = length;
                maxSubstring = str.substring(start, i + 1);
                }
                }
                return maxSubstring;
                }
console.log(longestSubstring("acdadcabcabc"));

function rotateArray(arr, k) {
    k = k % arr.length;
    let result = [];
    for (let i = k; i < arr.length; i++) {
        result.push(arr[i]);
        }
        for (let i = 0; i < k; i++) {
            result.push(arr[i]);
            }
            return result;
            }
            console.log(rotateArray([1, 2, 3, 4,5, 6,7], 4));

function merge(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
            }
            }
            result = result.concat(arr1.slice(i)).concat(arr2.slice(j));
            return result;
            }
            console.log(merge([1, 3, 5, 7], [2, 4, 6, 8]));

function fibonacci(n) {
    let fib = new Array(n + 1).fill(0);
    fib[1] = 1;
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[n];
        }
console.log(fibonacci(7));

function knapsack(capacity, weights, values) {
    let n = values.length;
    let dp = new Array(n + 1).fill(0).map(() => new Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}
const capacity = 50
const weights = [10, 20, 30]
const values = [60, 100, 120]
console.log(knapsack(capacity, weights, values));



