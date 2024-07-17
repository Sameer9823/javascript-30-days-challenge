for (let g = 1; g <= 10; g++) {
    console.log(g);
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

let i = 1;
while (i <= 10) {
    console.log(`Sum of ${i} and ${i} is ${i + i}`);
    i++;
}
let r = 1;
while (r <= 10) {
    console.log(`${r}`);
    r++;
}

//do while
let j = 1;  
do {
    console.log(j);
    j++;
} while (j <= 5);

// Factorial using do while
let f = 1;
do {
    f = f * 5;
    console.log(f);
    } while (f <= 5);

// print a 90 degree * pattern by using nesting loop
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}




//write a program to print number from 1 to 10 but skip 5 by using continue statement
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
        }
        console.log(i);
        }

//write a program to print the number from 1 to 10 and stop the loop when it on 7
for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
        }
        console.log(i);
        }
