
//async function always return promise
async function getData(){

    return "datmystring";



    //so either you return a promise from here 
    //other wise if you return like something value
    // return "mstrigjn"
    //then it will wrap this value into promise then it will return that promise
}

// const data=getData();
// console.log(data);
//as you can see in console you are getting promise

//now how to handel this promise ....how to get return data form promise
//so we can do like
// data.then((res)=>{
// console.log(res);
// }).catch((e)=>{
//     console.log(e)
// })


//now if we  return promise form async funtion then it will laso wrap that promise with promise or not?????
//ans is no ,it only wraps only inside promise not the promise
const pp=new Promise((resolve,reject)=>{
    resolve("promise is resolved");
})
async function getDatas(){

    return p;



    //so either you return a promise from here 
    //other wise if you return like something value
    // return "mstrigjn"
    //then it will wrap this value into promise then it will return that promise
}
// const datas=getDatas();
// console.log(datas);
// datas.then((result)=>{
//     console.log(result)
// })

//it is not mandate  to use async with only await,,,,,async is independent in js and can be used independently

//what is async
//async is the word which is used before the function to make fucntion async

async function getName(){

}//so this is a async function
//firts imp thig is always returns a promise
//now there are two case either you return a promise or you return a value..then this fun will automatically wrap that value inside promise
// and then it will return that
//the you can handel that promise by .then and .catch method



//async and await combo are used to handel promises
//why do we need async await and how we handel before async await

const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise is resolved");
    },10000)
   
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise is resolved in seoncd one");
    },5000)
   
})
//handeling promise in normal function

function getPname(){
    //as you can see js engine does not wait for promise to be resolved
    //it just printed jsjsjss first then after 10s res is printed
p.then((res)=>{
    console.log(res)
})


console.log("jsjsjsj")
}
// getPname()
// console.log(getPname())


// async function hadelPromise(){

//     //to handel promise inside async function you have to use awai tkeyword
//    const val= await p;
//    console.log(val);
//    //see by only doing this we can get the valu form the promise
//    //we do not need to do .then to get our data
//    ///NOTE
//    //AWAIT can only be used indide your async function

   
// }
// hadelPromise();

async function hadelPromise(){

    console.log("namset")
   
   
   const val2=await p2;
   console.log(val2)
   console.log("jsjsjsj")
   const val= await p;
   console.log(val);

//you can see here js engine wait for first promise to be resolved then it moves further 
//as you can see in the console first it is taking 10 s to complete to the promise then it print res then it prints js in the console
//which is jsut opposite to the older version of handeling promises 
//so remember when you use asyc await js engines waits for promise to be resolved


//see the behaviour when we have used two same promises
}
// hadelPromise();
console.log("ram ram")
//now understand what is happening
//as js in single threaded synchronus language
//see first log will be printed as soon as it came acroos first promise ,it will suspedn the function form call stack
//as it can not block the call stack as it has only one thread so it has to run continuously ,so as soon as promise got resolved 
//it  again come and run the nect lines of code synchronously and then again it will see the promise but as till now onlt 5s got 
//it have to wait for more 5 second to promise to be resolved so it gain suspend fun form call stcak
//then afetr 5 second as soon promise got resolved it run the further remainig lines of code
//js engines never waits for someOne it just looking that it is waiting but no it is not waiting 
//as you can see ram ram got printed this shows suspensation of async function


//How fetch works
//fethc() is a promise and when promise is resolved it gives response object ...so remember ftech function gives response object
//which have body which is in the form of redable stream
//to convert that stream to json format 
//you have to do response.json();

//fetch()=>response=>response.json()
//respose.json is again a promise 
//when this will resolve you will get your data

// now how to handel errors in async await 
//as in older method we use catch 
//but here we use try{}catc{}  block

async function pfather(){
    // try{
        const response=await fetch("https://githubapi.com");
        const data=response.json();
        console.log(data);
        console.log("hello")
    // }catch(err){
    //     console.log(err)
    // }
}
// pfather()
//or you can handel error like
pfather()
.catch((e)=>{
    console.log(e)
})


//diff b/w async await and promise
//so there is no diff
//async awiat is only the syntactical form to write promises   ...behind  the scene js is only doing .then and .cathc only
//but yes async await synatx is more eaiser and make more sense ,,,otherwise it is one and the same thing  conecpt wise