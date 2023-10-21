const cart=["shoes","pants","jeans"];

const promise= craeteOrder(cart);
promise.then(function(orderId){
    // console.log(orderId)
    // console.log("hello")
    return orderId
    
})
.then((orderId)=>{
return proceedToPayment(orderId)
})
.then((paymentInfo)=>{
// console.log(paymentInfo)
})
.catch((e)=>{
    // console.log(e)
}).then(()=>{
    // console.log("no matter what will happens i will be always called")
})
//now you can see that it does not matter that what is after the catch is written it will always be called

// console.log(promise)
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


// const newPromise=new  Promise(function(res,rej){
//     setTimeout(() => res("done!"), 1000);
// })
// newPromise.then((state)=>{
//     console.log(state)
//     return state;
// }).then((state)=>{
//     console.log(state)
// })

// console.log(newPromise);

// function loadscript(t){
//  return new Promise(function(res,rej){
    
//     if(t%2==0){
//         res("yes it is even")
//     }else{
//         rej("it is odd")
//     }
//  })
// }

// const np=loadscript(3)
// np.then((ans)=>{
//     console.log(ans)
// })
// .catch((e)=>{
//     throw new Error(e)
 
// })



// const fn1=()=>{
//     console.log("i ammn fin1")
// }
// const fn2=()=>{
//     console.log("i ammn fin2")
// }
// function name(name,fn1,fn2){
//     console.log(name)
//     fn1()
//     fn2()
// }
// name("jatin",fn1,fn2);


// delay(100).then((value,value2)=>{
//     console.log(value,value2)
// })

// function delay(ms){
//     return new Promise((res,rej)=>{
//     //    setTimeout(()=>{     throw new Error("heelo")},ms)
//       rej("error")
//     })
// }

// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
//   ];
  
//   // map every url to the promise of the fetch
//   let requests = urls.map(url => fetch(url));
// //   console.log(requests)
//   Promise.all(requests).then((state)=>{
// console.log(state)
//   })


// Promise.all([
//     fetch('/template.html'),
//     fetch('/style.css'),
//     fetch('/data.json')
//   ]).then(render);


// let names = ['iliakan', 'remy', 'jeresig'];


// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
// // requests.push(new Promise((res,rej)=>{rej("error")}))
// // names.map(name => fetch(`https://api.github.com/users/${name}`));

// Promise.race(requests)
//   .then(responses => {
//     // all responses are resolved successfully
//     for(let response of responses) {
//     //   alert(`${response.url}: ${response.status}`); // shows 200 for every url
//     console.log(`${response.url}: ${response.status}`)
//     }
//     return responses;
//   })
//   // map array of responses into an array of response.json() to read their content
//   .then(responses => Promise.all(responses.map(r => r.json())))
//   // all JSON answers are parsed: "users" is the array of them
//   .then(users => users.forEach(user => console.log(user.name)))
//   .catch((e)=>{console.log(e)})



// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://no-such-url'
//   ];
  
//   Promise.allSettled(urls.map(url => fetch(url)))
//     .then(results => { // (*)
//       results.forEach((result, num) => {
//         if (result.status == "fulfilled") {
//           console.log(`${urls[num]}: ${result.value.status}`);
//         }
//         if (result.status == "rejected") {
//           console.log(`${urls[num]}: ${result.reason}`);
//         }
//       });
//     });

// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://no-such-url'
//   ];

//   let p=Promise.race(urls.map((url)=>{fetch(url)}))
//   p.then((res)=>{
//     console.log(res)
//   })\
// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => resolve(("Ouch!")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000))
// ])
// .then((res)=>{
// console.log(res)
// })
// .catch(error => {
//   console.log(error.constructor.name); // AggregateError
//   console.log(error.errors[0]); // Error: Ouch!
//   console.log(error.errors[1]); // Error: Error!
// });
