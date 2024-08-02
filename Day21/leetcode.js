
function twoSum(nums, target) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] == target) {

                return [i, j];

            }

        }

    }

    return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 13));
console.log(twoSum([2, 5, 8, 3], 7));
console.log(twoSum([8, 9, 6, 2], 15));
console.log(twoSum([3, 5, 1, 8], 6));


function reverse(x) {

    if (x >= 0) {

        return parseInt(x.toString().split('').reverse().join(''));

    } else {

        return parseInt((x * -1).toString().split('').reverse().join('')) * -1;

    }

}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(1205));


function reverse(x) {

    if (x >= 0) {

        return parseInt(x.toString().split('').reverse().join(''));

    } else {

        return parseInt((x * -1).toString().split('').reverse().join('')) * -1;

    }

}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));


function isPalindrome(x) {

    if (x >= 0) {

        return x.toString() == x.toString().split('').reverse().join('');

    } else {

        return false;

    }

}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(101));

 

class Node {

    constructor(data, next = null) {

        this.data = data;

        this.next = next;

    }

}

class LinkedList {

    constructor() {

        this.head = null;

    }

}

function mergeLists(head1, head2) {

    if (head1 == null) {

        return head2;

    } else if (head2 == null) {

        return head1;

    }

    if (head1.data < head2.data) {

        head1.next = mergeLists(head1.next, head2);

        return head1;

    } else {

        head2.next = mergeLists(head1, head2.next);

        return head2;

    }

}

console.log(mergeLists(new LinkedList(), new LinkedList()));


function isValid(s) {

    if (s.length % 2 != 0) {

        return false;

    }

    let stack = [];

    for (let i = 0; i < s.length; i++) {

        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {

            stack.push(s[i]);

        } else if ((s[i] == ')' && stack.pop() != '(') || (s[i] == '}' && stack.pop() != '{') || (s[i] == ']' && stack.pop() != '[')) {

            return false;

        }

    }

    return stack.length == 0;

}

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));

