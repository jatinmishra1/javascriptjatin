//question is like
// sum(1)(2)(3)(4)......    explain this and find the output form it

// so suppose this was something like   sum(1)(2)() and it return 3 no how could you write the function;
//so it is like starting sum is the function which is taking argument a
// let sum=function(a)    so [sum(1)] is function will return a function which will have parameter b 
//let sum=function(a){
    // returm  function(b){
    // no this function should be executed and return me the sum of a and b i.e 3
//   }
//}
//


// let sum=function(a){
//     return function(b){
//         return function(c){
//             return  a+b+c;
//         }
//     }
// }
// let tum=sum(3)(4)(6);
// console.log(tum)

// now to solve the older problem
// i.e sum(1)(2)(3)(4)........(10)();
// so we have to do like

let sum=function(a){
    return function(b){
        if(b){
            return sum(a+b);
        }else{
            return a;
        }
       
        // console.log(a+b)
    }
}
let tum=sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)();
console.log(tum)
// as you can see we got 55 here 