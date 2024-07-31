
let pattern = /javascript/i;

let text = "I love javascript";

console.log(text.match(pattern))


let pattern1 = /\d/g;

let text1 = "I love javascript 123";

console.log(text1.match(pattern1))

let pattern2 = /\b[A-Z][a-zA-Z]*\b/g;

let text2 = "I Love javascript A J 123";

for (let match of text2.matchAll(pattern2)) {
    console.log(match[0]);
}


let pattern3 = /\d+/g;

let text3 = "I love 748 javascript 123";

for (let match of text3.matchAll(pattern3)) {
    console.log(match[0]);
}


let patterns = /^(\d{3})-(\d{3})-(\d{4})$/;
let phoneNumber = "123-456-7890";

let match = phoneNumber.match(patterns);

if (match) {
    let areaCode = match[1];
    let centralOfficeCode = match[2];
    let lineNumber = match[3];

    console.log(`Area Code: ${areaCode}`);
    console.log(`Central Office Code: ${centralOfficeCode}`);
    console.log(`Line Number: ${lineNumber}`);
} else {
    console.log("Invalid phone number format.");
}



let pattern4 = /([a-zA-Z0-9._-]+)@([a-zA-Z0-9._-]+)\.([a-zA-Z]{2,5})/;

let text4 = "My email is 0HqoN@example.com";

let match4 = text4.match(pattern4);

if (match4) {
    let userName = match4[1];
    let email = match4[2];

    console.log(`User Name: ${userName}`);
    console.log(`Email: ${email}`);
} else {
    console.log("Invalid email format.");
}


let pattern5 = /\b[A-Z][a-zA-Z]*\b/g;

let text5 = "I love javascript A J 123";

for (let match of text5.matchAll(pattern5)) {
    console.log(match[0]);
}


let pattern6 = /\b[A-Z][a-zA-Z]*\b$/;
let text6 = "jnA kdndKH lsmlsmB Lkdns";

let match1 = text6.match(pattern6);

if (match1) {
    console.log(match1[0]);
} else {
    console.log("No matching word found at the end of the string.");
}


let pattern7 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let text7 = "Sameer@9823";

let match2 = text7.match(pattern7);

if (match2) {
    console.log(match2[0]);
} else {
    console.log("No matching word found at the end of the string.");
}



let pattern8 = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

let text8 = "http://www.example.com";

let match3 = text8.match(pattern8);

if (match3) {
    console.log(match3[0]);
} else {
    console.log("No matching word found at the end of the string.");
}








