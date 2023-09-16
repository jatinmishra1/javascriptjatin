const cart=["shoes","pants","jeans"];

const promise= craeteOrder(cart);
promise.then(function(orderId){
    console.log(orderId)
    console.log("hello")
    return orderId
    
})
.then((orderId)=>{
return proceedToPayment(orderId)
})
.then((paymentInfo)=>{
console.log(paymentInfo)
})
.catch((e)=>{
    console.log(e)
}).then(()=>{
    console.log("no matter what will happens i will be always called")
})
//now you can see that it does not matter that what is after the catch is written it will always be called

console.log(promise)
function craeteOrder(cart){
    const pr=new Promise((resolve,reject)=>{
        if(!validate(cart)){
            reject("cart details are wrong");
        }
        const orderId="12345";
        if(orderId){
            setTimeout(()=>{
                resolve(orderId)
            },1000)
         
        }
     
    })
    return pr;
}
function proceedToPayment(orderId){

    return new Promise((resolve,reject)=>{
        resolve("payment successful")
    })
}

function validate(cart){
    return true;
}



//promise chainig