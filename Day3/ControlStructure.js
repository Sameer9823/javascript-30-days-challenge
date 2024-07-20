//write a program for negative, positive and zero number
let i = 56;

if (i > 0) {
    console.log("positive number");
} else if (i < 0){
    console.log("negative number");
} else{
    console.log("zero");
}

//write a program to check is eligible to vote age>=18

let age = 23;
if (age >= 18) {
    console.log("The person can vote");
} else {
    console.log("The person cannot give vote");
}

//write a program to find a greater three number using nested if else
function findGreatest(a, b, c) {
    let greatest;

    if (a > b) {
        if (a > c) {
            greatest = a;
        } else {
            greatest = c;
        }
    } else {
        if (b > c) {
            greatest = b;
        } else {
            greatest = c;
        }
    }

    return greatest;
}

const num1 = 10;
const num2 = 20;
const num3 = 15;

const greatestNumber = findGreatest(num1, num2, num3);
console.log("The greatest number is: " + greatestNumber);

//switch
function getDayName(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
            break;
    }

    return dayName;
}

const dayNumber = 3;
const dayName = getDayName(dayNumber);
console.log("The day is: " + dayName);

//GRADING 
function getGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 50 && score < 60):
            grade = 'E';
            break;
        case (score >= 0 && score < 50):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
            break;
    }

    return grade;
}

const score = 85;
const grade = getGrade(score);
console.log("The grade is: " + grade);

//TERNARY OPERATOR

let a = 4;
(a / 2) ? console.log("even") : console.log("odd");

function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("The person is eligible to vote.");
    } else {
        console.log("The person is not eligible to vote.");
    }
}

checkVotingEligibility(20);
checkVotingEligibility(16);

function getDayOfWeek(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
            break;
    }

    console.log("The day is: " + dayName);
}

getDayOfWeek(3);
getDayOfWeek(8);

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

checkLeapYear(2020);
checkLeapYear(2021);





