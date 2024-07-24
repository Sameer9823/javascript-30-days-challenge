
function throwError() {
    try {
        throw new Error("Error Occured");
        } catch (error) {
            console.log(error.message);
            }
            }
            throwError();


function divide(a, b) {
    try {
        if (b == 0) {
            throw new Error("Denominator can't be zero");
            }
            return a / b;
            } catch (error) {
                console.log(error.message);
            }
            finally{
                console.log("This will always execute");
            }
                }
                divide(10, 0);

function throwError() {
    try {
        throw new MyError("Error Occured");
        } catch (error) {
            console.log(error.message);
            }
            }
            throwError();
            function MyError(message) {
                this.message = message;
                this.name = "MyError";
                }

//use try catch with asyn await to solve the promise
async function throwError() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        if (data.id == 1) {
            throw new Error("Error Occured");
            }
            console.log(data);
            } catch (error) {
                console.log(error.message);
                }
            }
                throwError();

async function throwError1() {
    try {
        const response = await fetch("https://jsonlaceholder.typicode.com/todos/1");
        const data = await response.json();
        if (data.id == 1) {
            throw new Error("Error Occured");
            }
            console.log(data);
            } catch (error) {
                console.log(error.message);
                }
            }
                throwError1();


