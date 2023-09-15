// let multiply=function(x,y){
//     console.log(x*y);
// }
// let multiplebytwo=multiply.bind(this,2)
// multiplebytwo(5);

// let multiplebythree=multiply.bind(this,3);
// multiplebythree(5)



//we can do with the help of closures also
let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplebythree=multiply(2);
// multiplebythree(3);
//see we are getting results 



// Currying is a function that takes one argument at a time and returns a new function expecting the next argument.
//  It is a transformation of functions that translates
//  a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// In other terms, currying is when a function — instead of taking all arguments at one time — takes the first
//  one and returns a new function, which takes the second one and returns a new function,
//  which takes the third one, etc. until all arguments are completed.

// why currying
//It divides your function into multiple smaller functions that can handle one responsibility. 
//This makes your function pure and less prone to errors and side effects
//It is used in functional programming to create a higher-order function
// This could be personal preference, but I love that it makes my code readable


// How does currying work?
// Currying is a function that accepts multiple arguments. It will transform this function into a series of functions, 
// where every little function will accept one argument:

// Noncurried version//
const add = (a, b, c)=>{
    return a+ b + c
}
// console.log(add(2, 3, 5)) // 10

// Curried version//
const addCurry =(a) => {
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(addCurry(2)(3)(5)) // 10

const addnum=(a)=>{
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}

console.log(addnum(1)(2)(3));


function sendRequest(greet){
    return function(name){
        return function(message){
            return `${greet} ${name}, ${message}`
        }
    }
}
sendRequest('Hello')('John')('Please can you add me to your Linkedin network?');




// Here is a code example of advanced currying:

const curry =(fn) =>{
    return curried = (...args) => {
        if (fn.length !== args.length){
            return curried.bind(null, ...args)
        }
    return fn(...args);
    };
}
const totalNum=(x,y,z) => {
    return x+y+z 
} 
const curriedTotal = curry(totalNum);
console.log(curriedTotal(10) (20) (30));



const currnum=(fun)=>{
return (...args)=>{
if(fun.length!=args.length){

}else{
    return fun(...args)
}
}
}
const sum=(x,y,z)=>{
    return x+y+z;
}
const addnumber=currnum(sum);
console.log(addnum(50)(70)(80));


// Modern currying with ES6
const sendRequests = greet => name => message =>
 (`${greet} ${name}, ${message}`)
console.log(sendRequests('Hello')('John')('Please can you add me to your Linkedin network?'))