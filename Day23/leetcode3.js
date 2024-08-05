/**
 * solve the median of Two Sorted Arrays" problem 
 * write a function that take two sorted array of integer and return the median of the two sorted arrays
 * 
 * 
 */
function findMedianSortedArrays(nums1, nums2) {

    let arr = [...nums1, ...nums2];

    arr.sort((a, b) => a - b);

    if (arr.length % 2 === 0) {

        let mid = arr.length / 2;

        return (arr[mid - 1] + arr[mid]) / 2;

    } else {
        return arr[Math.floor(arr.length / 2)];
    }


}


console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));

/**
 * solve the merge k sorted lists 
 * write a function that take an array of k linked list each linked list is sorted in ascending order 
 * and merge all the linked lists into one sorted linked list
 * 
*/
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;

    const MinHeap = require('collections/heap'); 

    let minHeap = new MinHeap([], null, (a, b) => a.val - b.val); 
    let dummy = new ListNode();
    let current = dummy;

    
    for (let list of lists) {
        if (list !== null) {
            minHeap.add(list);
        }
    }

   
    while (minHeap.length > 0) {
        let node = minHeap.pop();
        current.next = new ListNode(node.val);
        current = current.next;
        if (node.next !== null) {
            minHeap.add(node.next);
        }
    }

    return dummy.next;
}

function printList(node) {
    let values = [];
    while (node !== null) {
        values.push(node.val);
        node = node.next;
    }
    console.log(values.join(' -> '));
}

let list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let list3 = new ListNode(2, new ListNode(6));

let mergedList = mergeKLists([list1, list2, list3]);
printList(mergedList); 

/**
 * solve the trapping rain water problem 
 * write a function that takes an array of non negative integer representing an elevation map where the width
 * of the each bar is 1 and compute how much water it can trap after rainig
 */
function trap(height) {

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;

    while (left < right) {

        if (height[left] < height[right]) {

            if (height[left] >= leftMax) {

                leftMax = height[left];

            } else {

                water += leftMax - height[left];

            }

            left++;

        } else {

            if (height[right] >= rightMax) {

                rightMax = height[right];

            } else {

                water += rightMax - height[right];

            }

            right--;

        }

    }

    return water;

}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

/**
 * solve the N-Queens problem on
 * write a function that place n queen on an n*n chessboard such that no queens attack each other and 
 * return all distinct solution to the n-queens puzzle
 */
function solveNQueens(n) {
    let board = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let result = [];

    solve(board, 0, result);

    return result.map(board => board.map(row => row.map(cell => cell === 1 ? 'Q' : '.').join('')).join('\n'));
}

function solve(board, row, result) {
    if (row === board.length) {
        result.push(board.map(row => row.slice())); 
        return;
    }

    for (let col = 0; col < board.length; col++) {
        if (isSafe(board, row, col)) {
            board[row][col] = 1;
            solve(board, row + 1, result);
            board[row][col] = 0; 
        }
    }
}

function isSafe(board, row, col) {
    
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 1) return false;
    }

    
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 1) return false;
    }

    
    for (let i = row, j = col; i >= 0 && j < board.length; i--, j++) {
        if (board[i][j] === 1) return false;
    }

    return true;
}


console.log(solveNQueens(4).join('\n\n'));

/**
 * solve the word ladder problem
 * write a function that take a begin word an end word and dictionary of word and finds the lenght
 * of the shortest transformation sequence from the begin word to the end word such that only one letter can be changed 
 * at a time and each transformed word must exist in the world list
 *  */

function ladderLength(beginWord, endWord, wordList) {

    let queue = [beginWord];
    let visited = new Set();
    visited.add(beginWord);
    let level = 1;

    while (queue.length > 0) {

        let size = queue.length;

        for (let i = 0; i < size; i++) {

            let word = queue.shift();

            if (word === endWord) {

                return level;

            }

            for (let j = 0; j < word.length; j++) {

                for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {

                    let newWord = word.slice(0, j) + String.fromCharCode(c) + word.slice(j + 1);

                    if (!visited.has(newWord) && wordList.includes(newWord)) {

                        queue.push(newWord);

                        visited.add(newWord);

                    }

                }

            }

        }

        level++;

    }

    return 0;

}

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));


