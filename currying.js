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
multiplebythree(3);
//see we are getting results 