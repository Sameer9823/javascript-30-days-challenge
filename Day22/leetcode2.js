class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
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

function createList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

let l1 = createList([2, 4, 3]); 
let l2 = createList([5, 6, 4]);

let result = addTwoNumbers(l1, l2);
printList(result); 


//solve the longest string without repeating character write a function that take a string and return the length of the longest substring.
function lengthOfLongestSubstring(s) {
    let longest = 0;
    let start = 0;
    let end = 0;
    let set = new Set();
    while (end < s.length) {
        if (!set.has(s[end])) {
            set.add(s[end]);
            end++;
            longest = Math.max(longest, set.size);
        } else {
            set.delete(s[start]);
            start++;
        }
    }
    return longest; 

}

console.log(lengthOfLongestSubstring("abcabcbb"));

//write a function that take an array of non-negative integer where each integer represent the height of a line drawn at each point. find two lines that together with the x axis from containersuch that the container holds the most water
function maxArea(height) {
    let max = 0;
    let start = 0;
    let end = height.length - 1;
    while (start < end) {
        let area = Math.min(height[start], height[end]) * (end - start);
        max = Math.max(max, area);
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return max;

}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));


//write a function that take an array of integer and finds all unique triplets in the array which give the sum of zero
function threeSum(nums) {
    let result = [];
    
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                
                
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                
                
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
                
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

//write a function that take an array of string and groups anagrams together

function groupAnagrams(strs) {
    let map = {};

    for (let str of strs) {
        let key = str.split('').sort().join('');

        if (!map[key]) {
            map[key] = [];
        }

        map[key].push(str);
    }

    return Object.values(map);


}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));




