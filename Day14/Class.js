class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
}
    greet() {
            return `person name is ${this.name} and age is ${this.age}`
            }
    }
    let person = new Person("sameer", 22)
    console.log(person.greet())


person.updateAge = function (name,age) {
    this.age = age
    this.name = name
    }
    person.updateAge('geet', 21)
    console.log(person.greet())

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age)
        this.studentID = studentID

    }
    sam(){
        return `student name is ${this.name} and age is ${this.age} and student id is ${this.studentID}`
    }
}
const student = new Student('sam', 22, 65)
console.log(student.sam());

student.greet = function () {
    return `student name is ${this.name} and age is ${this.age} and student id is ${this.studentID}`
}
console.log(student.greet());

class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Person name is ${this.name} and age is ${this.age}`;
    }

    static greetStatic(name, age) {
        return `Person name is ${name} and age is ${age}`;
    }
}

console.log(Persons.greetStatic("sameer", 22));

//add a static property to the student class and keep the track of number of student created increatment this property to constructor and log it
class Person5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student12 extends Person5 {
    static studentCount = 0;

    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
        Student12.studentCount++;
    }

    sam() {
        return `Student name is ${this.name} and age is ${this.age} and student ID is ${this.studentID}`;
    }

    static getStudentCount() {
        return Student12.studentCount;
    }
}

// const student1 = new Student12('John', 23, 'S12345');
const student2 = new Student12('Jane', 22, 'S12346');
const student3 = new Student12('Doe', 24, 'S12347');
const student4 = new Student12('Doe', 24, 'S12347');
const student5 = new Student12('Doe', 24, 'S12347');

console.log(Student12.getStudentCount());


class Name {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        }
        get fullname() {
            return this.firstname + ' ' + this.lastname;
            }
            }
            const name = new Name('John', 'Doe');
            console.log(name.fullname);

//add a setter method to the name class that return fullname and lastname and update the name using setter method
class Person55 {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(fullName) {
        const nameParts = fullName.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
        this._name = fullName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student112 extends Person55 {
    static studentCount = 0;

    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
        Student12.studentCount++;
    }

    sam() {
        return `Student name is ${this.name} and age is ${this.age} and student ID is ${this.studentID}`;
    }

    static getStudentCounts() {
        return Student12.studentCount;
    }
}

const student1 = new Student112('John Doe', 23, 'S12345');
console.log(student1.sam()); 

student1.name = 'Jane Smith';
console.log(student1.sam());
console.log(`First Name: ${student1.firstName}, Last Name: ${student1.lastName}`); 

console.log(Student112.getStudentCounts());


class Account23 {
    #balance = 0;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error('Insufficient balance');
        }
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account1 = new Account23(1000);

try {
    console.log("Depositing $500...");
    console.log(`New Balance: $${account1.deposit(500)}`); 

    console.log("Withdrawing $1000...");
    console.log(`New Balance: $${account1.withdraw(1000)}`); 

    console.log("Current Balance:");
    console.log(`$${account1.getBalance()}`); 
} catch (error) {
    console.log(error.message);
}

class Account8 {
    #balance = 0;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error('Insufficient balance');
        }
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account8 = new Account8(2000);

try {
    console.log("Depositing $300...");
    console.log(`New Balance: $${account8.deposit(300)}`); 

    console.log("Withdrawing $500...");
    console.log(`New Balance: $${account8.withdraw(500)}`); 

    console.log("Current Balance:");
    console.log(`$${account8.getBalance()}`); 
} catch (error) {
    console.log(error.message);
}

            












