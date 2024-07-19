const obj  = {
    title: 'Chai aur code',
    author: 'Hitesh Choudhary',
    description: 'Chai aur code is a blog about coding and chai',
    tags: ['coding', 'chai', 'blog']

}
console.log(obj);
console.log(obj.title);
console.log(obj.author);

//Add a method to book object that return a string with the book title and author
obj.getBookInfo = function(){
    return this.title + ' by ' + this.author;
    }
    console.log(obj.getBookInfo());

//Add a method to the book that 
obj.getBookInfo = function(year){
    return this.title + ' by ' + this.author + " in year " + year;
    }
    console.log(obj.getBookInfo(2024));

let obj2 = {
    library: [
        {
        name: 'Chai aur code',
        author: 'Hitesh Choudhary',
        book: 'Javascript'
        },
        {
            name: 'Chai aur code',
            author: 'codewithharry',
            book: 'Python'
        }
    ]
}
console.log(obj2.library[0].book);
console.log(obj2.library[1].author);

for(let i = 0; i < obj2.library.length; i++){
    console.log(obj2.library[i].name + " by " + obj2.library[i].author
        );
}

//by using this keyword log a value from object 
let obj5 = {
    name: 'sameer',
    age: 24,
    getBookInfo: function(){
        return this.name + " is " + this.age + " years old";
}
}
console.log(obj5.getBookInfo());

let obj6 = {
    name: 'sameer',
    age: 24,
    DOB: 2002,
    email: 'sameerselokar@gmail.com',

}


for (const key in obj6) {
    console.log(key);
}

for (const sa in obj6) {
    // console.log(key);
    console.log(`${sa}: ${obj6[sa]}`);
}







