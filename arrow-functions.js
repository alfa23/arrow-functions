/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwo(a, b) {
//     return a + b;
// }
// let sum = addTwo(5, 3);
// console.log(sum);

// Arrow Function With Parameters
const addTwo = (a, b) => {
    return a + b;
}
let sum = addTwo(5, 3);
console.log(sum);



// Single Line Arrow Function With Parameters
// const addTwoMore = (a, b) => (a + b); // also valid with parenthesis
const addTwoMore = (a, b) => a + b;
let sum2 = addTwoMore(4, 6);
console.log(sum2);

// Implicit Returns - first parenthesis not req. for single-parameter functions
const saySomething = message => console.log(message);
saySomething("Hello there!");

const sayHello = () => console.log("hello"); // no-parameter functions must have empty set of parenthesis to let JS know a function was declared
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiline str!
    </p>`
)
console.log(returnMultipleLines())