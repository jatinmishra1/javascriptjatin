
//calling function inside the function
function myfunc(myfunc2){
    myfunc2()
    console.log("my  func 1");
   
}

// function myfunc2(){
//     console.log("function 2")
// }
// myfunc(myfunc2)

// myfunc(()=>{
//     console.log("func3");
// })
// as you we can direct direct function nseide the function nad then it will call it original one

function getTwoNumbersAndAdd(num1,num2,onSucess,onFailure){
    if(typeof num1==="number" && typeof num2==="number"){
        console.log("we are here")
        onSucess(num1,num2)
        console.log("we are done")
    }else{
       onFailure()
    }
}
// getTwoNumbersAndAdd("3",4,(num1,num2)=>{
//     console.log(num1+num2);
// },()=>{
//     console.log("failed data type")
// })

//CALL BACK HELL  I.E pyramid of doom

// setTimeout(()=>{
//     console.log("one");
//     setTimeout(()=>{
//         console.log("two");
//         setTimeout(()=>{
//             console.log("three");
//             setTimeout(()=>{
//                 console.log("four");
//                 setTimeout(()=>{
//                     console.log("five");
//                     setTimeout(()=>{
//                         console.log("six");
//                         setTimeout(()=>{
//                             console.log("seven");
                        
//                         },1000)
                    
//                     },1000)
                
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)


//INTRO TO PROMISES
// const bucket=["vegies","fruits","nuts","grocerries","jym-matreia","lappu","motos"];

//promise is produced
// const motoPromise=new Promise((resolve,reject)=>{
// if(bucket.includes("vegies") && bucket.includes("motos")){
//     const  mymoto={
//         name:"msihra",
//         age:19

//     }
//     resolve(mymoto)
// }else{
//     reject(new Error("lost soul"))
// }
// })

//consume promise     in this we are manging failure and successb inside only one by passing both callback inside one
// motoPromise.then(
//     //when promise got resolved
//     (data)=>{
// console.log(data)
// }
// ,
// //when promise got rejected
// (error)=>{
//     console.log(error)
// }
// )

//        OR can also be consumed as     here we are dealing in other way
// setTimeout(()=>{
//     console.log("j")
// },100)
// motoPromise.then((data)=>{
// console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })

//NOTE THIS  PROMISE IS ALSO DONE BY BROWSER SO SAME FUNCTIONALITY AS SETIMEOUT FUNCTION
//but remember Promise got added into microtask queue not in call back queue
//remember priority of micro task queue is greater so if we have something in CBQ and MTQ ,MTQ will be preffered
//as you can see form the above result

// function returning promise

// function merimoto(){
//     const bucket=["vegies","fruits","nuts","grocerries","jym-matreia","lappu","motos"];
//     return new Promise((resolve,reject)=>{
//         if(bucket.includes("vegies") && bucket.includes("motos")){
//             const  mymoto={
//                 name:"msihra",
//                 age:19
        
//             }
//             resolve(mymoto)
//         }else{
//             reject(new Error("lost soul"))
//         }
//         })
// }
// merimoto().then((data)=>{
//     console.log(data.name)
// }).catch((e)=>{
//     console.log(e)
// })


//  promise and setTimeout together

// function mypromise(){
//     return new Promise((resolve,reject)=>{
//         const val=false;
        
//             setTimeout(()=>{
//                 if(val){
//                     resolve()
//                 }else{
//                     reject()
//                 }

//             },3000)
        
//     })
// }
// mypromise().then(()=>{
//     console.log("resolce");
// }).catch((e)=>{
//     console.log("reh")
// })

// then method humesha promise return krta hai

// function mypromise(){
//     return new Promise((resolve,reject)=>{
//     resolve("foo");
//     })
// }
// mypromise().then((data)=>{
//     console.log(data)
//     data+="baar"
//     return data; //as you can see it is returnig promise thats why only we are able do the operation downwards,o
//     //otherwise ypou cannot apply .then method to the string   ***remember***
// }).then((data)=>{
//     console.log(data)
// })

// const count=function mypromise(data){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(data)
//             res();
//         },1000)
//     })
// }
// count("one").then(()=>{
//     return count("two")  //remember return is very important here as we discussed then return promise otherwise it will lead to concurrnt
// }).then(()=>{// if i not return then one will print after one sec then all two,three,four print simultaneouslyy
//      return count("three")
//    }).then(()=>{
//     return count("four")
// }).then(()=>{
//     return count("five")
// }).then(()=>{
//     return count("six")
// }).then(()=>{
//     return count("seven")
// }).then(()=>{
//     return count("eight")
// }).then(()=>{
//     count("nine")
// })

///      AJAX   Asynchronous jacscript with XML(data format)  we dont use xml anymore we use json now
// HTTP-REQUEST
//I to create asynchronous web applications.// With Ajax, web applications can send and retrieve
// data from a server asynchronously (in the background 14 // without interfering with the display and)

 // behaviour of the existing page
 // We don't use data in XML format anymore.

 // we use JSON now.
 // we have 3 most common ways to create and send request to server


// 1.) xmlHTTPRequest Cold way of doing)

// 2.) fetch API (new way of doing)

// 3.) axios (this is third party library)

// const params=fetch("https://transloc-api-1-2.p.rapidapi.com/agencies.json")
// // console.log(params)
// params.then((data)=>{
//     if(data.ok){
//         const ds=data.json();
//                                  fetch send error only for network thats why we have to write if else here
// return ds;
//     }else{
//         return new Error("bad")
//     }

// }).then((data)=>{
//     console.log(data)
// })


//                      ASYN AWAIT


const mydata =async function(){
    const res=await fetch("https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/");
    console.log(res)
    const data=await res.age;
    return data /// it will still return the promise so resolve eith then

}
mydata().then((data)=>{
    console.log(data)
})