const carts=["shoes","pants","jeans"];

const promise= craeteOrder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId)
})


const user=fetch("nfohoej");
user.then((data)=>{
console.log(data)
}).then((data)=>{
    console.log(data)
})

//promises have three states pending ,fulllfilled and rejected
//promise onjects are immutable -----this is so so great


//what is promise
//promise is an object representing the eventual completion or failure of the asynchronous operation

//promises solves 2 major problesm
//1-inversion of control---that is giving the control of your code without knowing
//2-solving problem of call back hell  i.e pyramid of doom

//to do chaining inside promises always remember to do return
//means if you want you data flow form one .then to another .then then remember to us ereturn 


// like
promise
.then((data)=>{
    console.log(data)
    return data
})
.then((data)=>{
    console.log(data)
    return data
})
.then((data)=>{
    console.log(data)
    return data
})
//this is chaining 